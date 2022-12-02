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

const letterToScore = (letter) => {
  if (['A', 'X'].includes(letter)) return 1
  if (['B', 'Y'].includes(letter)) return 2
  if (['C', 'Z'].includes(letter)) return 3
}

const convertToScores = (arr) =>
  arr.map((line) => {
    const [them, me] = line.split(' ')
    const theirScore = letterToScore(them)
    const myScore = letterToScore(me)
    return [theirScore, myScore]
  })

const outcomePoints = (a, b) => {
  if (a === b) return 3
  if (a === 1 && b === 2) return 6
  if (a === 1 && b === 3) return 0
  if (a === 2 && b === 1) return 0
  if (a === 2 && b === 3) return 6
  if (a === 3 && b === 1) return 6
  if (a === 3 && b === 2) return 0
  return 0
}

const outcomeToScore = (a, b) => {
  // Draw
  if (b === 2) return a
  // Lose
  if (b === 1) {
    if (a === 1) return 3
    if (a === 2) return 1
    if (a === 3) return 2
  }
  // Win
  if (b === 3) {
    if (a === 1) return 2
    if (a === 2) return 3
    if (a === 3) return 1
  }
}

const scoresToPoints = (arr) => arr.map(([a, b]) => outcomePoints(a, b) + b)

const sum = (arr) => arr.reduce((acc, num) => acc + num, 0)

export function part1(input) {
  const scores = convertToScores(input)
  const points = scoresToPoints(scores)
  const total = sum(points)
  return total
}

export function part2(input) {
  const scoreAndOutcome = convertToScores(input)
  const scores = scoreAndOutcome.map(([a, b]) => [a, outcomeToScore(a, b)])
  const points = scoresToPoints(scores)
  const total = sum(points)
  return total
}
