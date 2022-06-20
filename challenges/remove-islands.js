"use strict"

// Remove islands from a 2D array

const isBorder = (borders, i, j, matrix) => {
    if (i === 0 || j === 0) {
        return true
    }

    if (i === matrix.length - 1 || j === matrix[i].length - 1) {
        return true
    }

    return borders.has(`${i}-${j}`)
}

const checkIfBorder = () => {

}

const removeIslands = (matrix) => {
    const borders = new Map()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const isBorder = checkIfBorder(borders, i, j, matrix)

            }
        }
    }

    return []
}

const example1 = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
]

const output1 = [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1],
]

console.log(removeIslands(example1))
