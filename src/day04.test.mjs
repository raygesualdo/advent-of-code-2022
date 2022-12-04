import test from 'ava'
import { part1, part2 } from './day04.mjs'

const input = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`
  .trim()
  .split('\n')

test('Part 1', (t) => {
  const expected = 2
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 4
  t.is(part2(input), expected)
})
