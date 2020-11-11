import { sum } from "./utils";

describe(`util test suite`, () => {

    it(`test sum fn`, () => {
        expect(sum(1, 2)).toBe(3);
    });
});