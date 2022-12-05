import test from 'ava'
import { part1, part2 } from './day02.mjs'

const input = `
A Y
B X
C Z
`
  .split('\n')
  .slice(1, -1)

test('Part 1', (t) => {
  const expected = 15
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 12
  t.is(part2(input), expected)
})
