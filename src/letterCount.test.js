import { getLetterCount } from "./letterCount";
import { expect } from "chai";

describe('getLetterCount - basic functionality', () => {
    it('returns empty object when passed empty string', () => {
        const expected = {}
        const actual = getLetterCount('')

        //comparing objects using deep equal
        //  to.equal will only check if referencing same object
        //  to.deep.equal will recruisivel check if values in objects are equal 
        expect(actual).to.deep.equal(expected)
    });

    it('returns correct letter count for word with one of each unique letter', () => {
        const expected = { c: 1, a: 1, t: 1 }
        const actual = getLetterCount('cat')

        expect(actual).to.deep.equal(expected)
    });

    it('returns correct letter count for word with both unique and non unique letters', () => {
        const expected = { b: 1, e: 2, t: 2, r: 1 }
        const actual = getLetterCount('better')

        expect(actual).to.deep.equal(expected)
    });
})