import { describe, expect, it } from "vitest";
import { throwDice, throwDices, getDicesWithSameValues, getPointsFromDices, testIfIsSuite } from ".";

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

describe("getDicesWithSameValues", () => {
    it("should return {1: 3, 2: 1, 3: 1} for [1, 1, 1, 2, 3]", () => {
        expect(getDicesWithSameValues([1, 1, 1, 2, 3])).toEqual({1: 3, 2: 1, 3: 1});
    });

    it("should return {2: 2, 3: 1, 4: 1, 5: 1} for [2, 2, 3, 4, 5]", () => {
        expect(getDicesWithSameValues([2, 2, 3, 4, 5])).toEqual({2: 2, 3: 1, 4: 1, 5: 1});
    });

    it("should return {6: 5} for [6, 6, 6, 6, 6]", () => {
        expect(getDicesWithSameValues([6, 6, 6, 6, 6])).toEqual({6: 5});
    });

    it("should return {1: 1, 2: 1, 3: 1, 4: 1, 5: 1} for [1, 2, 3, 4, 5]", () => {
        expect(getDicesWithSameValues([1, 2, 3, 4, 5])).toEqual({1: 1, 2: 1, 3: 1, 4: 1, 5: 1});
    });
}); 

describe("isSuite", () => {
    it("should return true for [1, 2, 3, 4, 5]", () => {
        expect(testIfIsSuite([1, 2, 3, 4, 5])).toBe(true);
    });

    if("should return false for [1, 1, 1, 2, 3]", () => {
        expect(testIfIsSuite([1, 1, 1, 2, 3])).toBe(false);
    });
})

describe("getPointsFromDices", () => {
    it("should return 28 (brelan) when given [1, 1, 1, 2, 3]", () => {
        expect(getPointsFromDices([1, 1, 1, 2, 3])).toBe(28);
    });

    it("should return 35 (carre) when given [2, 2, 2, 2, 5]", () => {
        expect(getPointsFromDices([2, 2, 2, 2, 5])).toBe(35);
    });

    it("should return 50 (yams) when given [6, 6, 6, 6, 6]", () => {
        expect(getPointsFromDices([6, 6, 6, 6, 6])).toBe(50);
    });

    it("should return 40 when given [1, 2, 3, 4, 5]", () => {
        expect(getPointsFromDices([1, 2, 3, 4, 5])).toBe(40);
    })

    it("should return 30 when given [2, 2, 3, 3, 3]", () => {
        expect(getPointsFromDices([2, 2, 3, 3, 3])).toBe(30);
    });
});
