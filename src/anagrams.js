//function that accepts two strings and returns true if the words are anagrams of oneanother
//  a word, phrase, or name formed by rearranging the letters of another
//ignore spaces
//igore all nonalpha and numeric characters
//ignore capitilization
import { getLetterCount } from "./letterCount"
export const isAnagram = (left, right) => {
    let result = false

    //remove all 
    //  non alpha characters including whitespace
    //  force lowercase to make case insensative
    //  split into array, sort to reorder, and rejoin back into array (easier comparing)
    //regex /\s*[^A-z]/g
    // checks for whitespace and anything not alpha globally (can also include case insensativity by appending i (../gi))
    left = left.replaceAll(/\s*[^A-z]/g, '').toLowerCase().split('').sort().join('')
    right = right.replaceAll(/\s*[^A-z]/g, '').toLowerCase().split('').sort().join('')

    let leftCount = getLetterCount(left)
    let rightCount = getLetterCount(right)

    if (JSON.stringify(leftCount) === JSON.stringify(rightCount)) {
        result = true
    }
    return result
}   
