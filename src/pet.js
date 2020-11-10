const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;
const DEATH_RATTLE = 'Your pet is no longer with us . . . soz!!';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}
Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
    growUp: function() {
        if (!this.isAlive()) {
            throw new Error(DEATH_RATTLE);
        }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },

    walk: function() {
        if (!this.isAlive()) {
            throw new Error(DEATH_RATTLE);
        }
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4;
        } else {
            this.fitness = 10;
        }
    },
    feed: function() {
        if (!this.isAlive()) {
            throw new Error(DEATH_RATTLE);
        }
        if ((this.hunger - 3) <= MINIMUM_HUNGER) {
            this.hunger = MINIMUM_HUNGER;
        } else {
            this.hunger -= 3;
        }
    },
    checkUp: function() {
        if (this.age >= MAXIMUM_AGE || this.hunger < MINIMUM_HUNGER || this.fitness <= 0) {
            return DEATH_RATTLE;
        }
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }
        if (this.fitness <= 3) {
            return 'I need a walk';
        }
        if (this.hunger >= 5) {
            return 'I am hungry';
        } else {
            return 'I feel great!';
        }
    },
    isAlive: function() {
        if (this.fitness <= 0) {
            return false;
        }
        if (this.hunger >= 10) {
            return false;
        }
        if (this.age >= 30) {
            return false;
        } else {
            return true
        }
    }
}

module.exports = Pet;