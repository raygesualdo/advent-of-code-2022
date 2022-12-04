import { sum } from './utils.mjs'

// Part 1
// Rock:     A, X, 1
// Paper:    B, Y, 2
// Scissors: C, Z, 3

// Part 2
// Rock:     A, 1
// Paper:    B, 2
// Scissors: C, 3
// Lose:     X, 1
// Draw:     Y, 2
// Win:      Z, 3

const plays = [
  [1, 3, 0],
  [2, 1, 0],
  [3, 2, 0],
  [1, 2, 6],
  [2, 3, 6],
  [3, 1, 6],
]

const letterToScore = (letter) => {
  if (['A', 'X'].includes(letter)) return 1
  if (['B', 'Y'].includes(letter)) return 2
  if (['C', 'Z'].includes(letter)) return 3
}

const convertToScores = (arr) =>
  arr.map((line) => {
    return line.split(' ').map(letterToScore)
  })

const outcomePoints = (a, b) => {
  if (a === b) return 3
  return plays.find((x) => x[0] === a && x[1] === b)[2]
}

const outcomeToScore = (a, b) => {
  if (b === 2) return a
  const c = b === 1 ? 0 : 6
  return plays.find((x) => x[0] === a && x[2] === c)[1]
}

const scoresToPoints = (arr) => arr.map(([a, b]) => outcomePoints(a, b) + b)

export function part1(input) {
  const scores = convertToScores(input)
  const points = scoresToPoints(scores)
  return sum(points)
}

export function part2(input) {
  const scoreAndOutcome = convertToScores(input)
  const scores = scoreAndOutcome.map(([a, b]) => [a, outcomeToScore(a, b)])
  const points = scoresToPoints(scores)
  return sum(points)
}
