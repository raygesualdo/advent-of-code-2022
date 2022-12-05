import { add, chunkByBlankLines, sum, toInt } from './utils.mjs'

export function part1(input) {
  const chunks = chunkByBlankLines(input)
  const sums = chunks.map((chunk) => chunk.map(toInt).reduce(add))
  return Math.max(...sums)
}

export function part2(input) {
  const chunks = chunkByBlankLines(input)
  const sums = chunks.map((chunk) => chunk.map(toInt).reduce(add))
  return sum(sums.sort((a, b) => b - a).slice(0, 3))
}
