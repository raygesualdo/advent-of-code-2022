import { intersect, sum } from './utils.mjs'

export function chunkd(array, chunkSize) {
  const length = array.length
  const chunks = []
  for (let start = 0; start < length; start += chunkSize) {
    chunks.push(array.slice(start, start + chunkSize))
  }
  return chunks
}

const splitString = (str) => chunkd(str, str.length / 2)

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
  const groups = chunkd(input, 3)
  const commonLetters = groups.map((group) => group.reduce(intersect).join(''))
  const priorities = commonLetters.map(letterPriority)
  return sum(priorities)
}
