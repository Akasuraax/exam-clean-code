import { describe, expect, it } from "vitest";
import { throwDice, throwDices, isBrelan, isCarre, getMaxDicesWithSameValues } from ".";

describe("throwDice", () => {
    it("should return a number greater than 1", () => {
        expect(throwDice()).toBeGreaterThanOrEqual(1);
    })

    it("shoud return a number less than 6", () => {
        expect(throwDice()).toBeLessThanOrEqual(6);
    })
});

describe("throwDices", () => {
    it("should return an array", () => {
        expect(Array.isArray(throwDices(5))).toBe(true);
    });

    it("should return an array of the correct length", () => {
        expect(throwDices(5).length).toBe(5);
    })

    it("should return an empty array if lower of equal than 0", () => {
        expect(throwDices(-10).length).toBe(0);
    })
});

describe("getMaxDicesWithSameValues", () => {
    it("should return 3 for [1, 1, 1, 2, 3]", () => {
        expect(getMaxDicesWithSameValues([1, 1, 1, 2, 3])).toBe(3);
    });
});