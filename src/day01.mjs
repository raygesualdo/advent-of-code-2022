import { add, sum, toInt } from './utils.mjs'

const chunk = (arr) => {
  const chunks = [[]]
  for (const item of arr) {
    if (!item) {
      chunks.push([])
    } else {
      chunks.at(-1).push(item)
    }
  }
  return chunks
}

export function part1(input) {
  const chunks = chunk(input)
  const sums = chunks.map((chunk) => chunk.map(toInt).reduce(add))
  return Math.max(...sums)
}

export function part2(input) {
  const chunks = chunk(input)
  const sums = chunks.map((chunk) => chunk.map(toInt).reduce(add))
  return sum(sums.sort((a, b) => b - a).slice(0, 3))
}
