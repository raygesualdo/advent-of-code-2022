import { chunkInto, intersect, sum } from './utils.mjs'

const splitString = (str) => chunkInto(str, str.length / 2)

const letterPriority = (letter) => {
  return letter.codePointAt(0) - (letter === letter.toLowerCase() ? 96 : 38)
}

export function part1(input) {
  const compartments = input.map(splitString)
  const commonLetters = compartments.map(([a, b]) => intersect(a, b).at(0))
  const priorities = commonLetters.map(letterPriority)
  return sum(priorities)
}

export function part2(input) {
  const groups = chunkInto(input, 3)
  const commonLetters = groups.map((group) => group.reduce(intersect).join(''))
  const priorities = commonLetters.map(letterPriority)
  return sum(priorities)
}
