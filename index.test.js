import { describe, expect, it } from "vitest";
import { throwDice, throwDices } from ".";

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
});