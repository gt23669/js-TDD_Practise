import { expect } from "chai";
import { isAnagram } from "./anagrams"

describe('isAnagram - basic functionality', () => {
    //Examples:
    //!ist3n - si13nt
    //conversation - voices rant on
    //STATE - taste

    //strings with spaces
    it('returns true with spaces', () => {
        const expected = true
        const actual = isAnagram('conversation', 'voices rant on')

        expect(actual).to.equal(expected)
    });
    // //strings with nonalpha and numeric characters
    it('returns true with non-alpha and numeric characters', () => {
        const expected = true
        const actual = isAnagram('!ist3n', 'si13nt')

        expect(actual).to.equal(expected)
    });
    // //strings with capitilization differences
    it('returns true with capitilization differences', () => {
        const expected = true
        const actual = isAnagram('STATE', 'taste')

        expect(actual).to.equal(expected)
    });
    it('returns false with string length differences', () => {
        const expected = false
        const actual = isAnagram('STATE', 'tastes')

        expect(actual).to.equal(expected)
    });
    it('returns true with listen and silent', () => {
        const expected = true
        const actual = isAnagram('listen', 'silent')

        expect(actual).to.equal(expected)
    });
    it('returns false with listens and silent', () => {
        const expected = false
        const actual = isAnagram('listens', 'silent')

        expect(actual).to.equal(expected)
    });
    it('returns true with elbow and below', () => {
        const expected = true
        const actual = isAnagram('elbow', 'below')

        expect(actual).to.equal(expected)
    });
})