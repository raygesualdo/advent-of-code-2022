import test from 'ava'
import { part1, part2, chunkd } from './day03.mjs'

const input = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`
  .trim()
  .split('\n')

test('Part 1', (t) => {
  const expected = 157
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 70
  t.is(part2(input), expected)
})

test('chunkd', (t) => {
  t.deepEqual(chunkd([1, 2], 1), [[1], [2]])
  t.deepEqual(chunkd([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]])
})
