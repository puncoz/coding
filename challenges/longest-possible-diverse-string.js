// We consider alphabet with only three letters "a", "b" and "c". A string is called diverse if no three
// consecutive characters are the same. In other words, a diverse string may not contain any of the strings
// "aaa", "bbb" or "ccc".
//
// Write a function:
//  function solution(A,B,C);
//
// that, given three integers A, B and C, returns any longest possible diverse string containing at most A
// letters 'a', at most B letters 'b' and at most C letters 'c'. If there is no possibility of building any string,
// return empty string.
//
// Examples:
//
// 1. Given A = 6, B = 1 and C = 1, your function may return 'aabaacaa'. Note that 'aacaabaa' would
// also be a correct answer. Your function may return any correct answer.
//
// 2. Given A = 1, B = 3, C = 1, your function may return 'abbcb', 'bcbab' or 'bacbb' or any of several
// other string.
//
// 3. Given A = 0, B = 1, C = 8 your function should return 'ccbcc', which is the only correct answer
// in this case.
//
// Assume that:
// - A, b, and C are integers within the range [0..100];
// - A + B + C > 0;
//
// In your solution, focus on correctness. The performance of your solution will not be the focus of the
// assessment.

"use strict"

const longestDiverseString2 = (a, b, c) => {
    let str = "", aCount = 0, bCount = 0, cCount = 0
    let len = a + b + c
    for (let i = 0; i < len; i++) {
        if (a >= b && a >= c && aCount != 2 || bCount == 2 && a > 0 || cCount == 2 && a > 0) {
            adjustCounts("a", aCount + 1, 0, 0)
            a--
        } else if (b >= a && b >= c && bCount != 2 || aCount == 2 && b > 0 || cCount == 2 && b > 0) {
            adjustCounts("b", 0, bCount + 1, 0)
            b--
        } else if (c >= a && c >= b && cCount != 2 || bCount == 2 && c > 0 || aCount == 2 && c > 0) {
            adjustCounts("c", 0, 0, cCount + 1)
            c--
        }
    }

    function adjustCounts(letter, newA, newB, newC) {
        aCount = newA
        bCount = newB
        cCount = newC
        str += letter
    }

    return str
}

const longestDiverseString = (A, B, C) => {
    const letters = [
        ["a", A],
        ["b", B],
        ["c", C],
    ]

    let result = []
    for (let i = 0; i < (A + B + C); i++) {
        letters.sort((a, b) => b[1] - a[1])

        let firstLetter = true

        if (
            result.length > 0 &&
            result[result.length - 1] === result[result.length - 2] &&
            result[result.length - 1] === letters[0][0]) {
            firstLetter = false
        }

        const letterIndex = firstLetter ? 0 : 1
        const letter = letters[letterIndex]
        if (!letter[1]) {
            break
        }

        result.push(letter[0])
        letters[letterIndex][1]--
    }

    return result.join("")
}

console.log(longestDiverseString(6, 1, 1))
console.log(longestDiverseString(1, 3, 1))
console.log(longestDiverseString(0, 1, 8))
