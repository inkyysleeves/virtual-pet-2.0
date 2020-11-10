const Pet = require("../src/pet.js");

describe("constructor", () => {

    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("sets the name property", () => {
        const pet = new Pet("Fido");

        expect(pet.name).toEqual("Fido");
    });
    it("has an initial age of 0", () => {
        const pet = new Pet("Fido");

        expect(pet.age).toEqual(0);
    });
    it("has an intial hunger of 0", () => {
        const pet = new Pet("Fido");

        expect(pet.hunger).toBe(0);
    });
    it("has an initial fitness of 10", () => {
        const pet = new Pet("Fido");

        expect(pet.fitness).toEqual(10);
    });
});

describe("growUp", () => {
    it("increases the age by 1", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
    it("increases the hunger by 5", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });
    it("decrease the fitness by 3", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe("walk", () => {
    it("increase fitness by 4", () => {
        const pet = new Pet("Fido");

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it("increases fitness to a maximum of 10", () => {
        const pet = new Pet("Fido");

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});
describe('feed', () => {
    it('should decrease the pets hunger by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 3;
        pet.feed();

        expect(pet.hunger).toBe(0);
    });
    it('throws an error if the pet is no longer alive', () => {
        const pet = new Pet('Fido');

        pet.age = 30;
        expect(() => pet.feed()).toThrow("Your pet is no longer with us . . . soz!!");
    });
});
describe('checkUp', () => {
    it('should check if the pet needs a walk', () => {
        const pet = new Pet('Fido');

        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toEqual("I need a walk");
    });
    it('should check if the pet is hungry or not', () => {
        const pet = new Pet('Fido');

        pet.hunger = 6;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I am hungry");
    });
    it('it should check if the pet needs a walk and is hungry', () => {
        const pet = new Pet('Fido');

        pet.hunger = 6;
        pet.fitness = 2;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });
    it('checks if it doeesnt need either', () => {
        const pet = new Pet('Fido');

        pet.fitness = 7;
        pet.hunger = 4;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel great!");
    });
});
describe('isAlive', () => {
    it('check if the pets fitness is 0 or less', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;
        expect(pet.isAlive()).toEqual(false);
    });
    it('check if the pets hunger is 10 or more', () => {
        const pet = new Pet('Fido');

        pet.hunger = 10;
        pet.isAlive();

        expect(pet.isAlive()).toEqual(false);
    });
    it('check if the pets age is 30 or more', () => {
        const pet = new Pet('Fido');

        pet.age = 30;
        pet.isAlive();

        expect(pet.isAlive()).toEqual(false);
    });
    it('checks if the others are not false then it should be true', () => {
        const pet = new Pet('Fido');

        pet.fitness = 3;
        pet.hunger = 4;
        pet.age = 25;
        pet.isAlive();

        expect(pet.isAlive()).toEqual(true);
    });
    it('checks if the pet is alive or not', () => {
        const pet = new Pet('fido');

        pet.age = 30;
        pet.fitness = 0;
        pet.hunger = -1;

        pet.checkUp();

        expect(pet.checkUp()).toEqual('Your pet is no longer with us . . . soz!!');
    });
});