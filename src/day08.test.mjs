import test from 'ava'
import { part1, part2 } from './day08.mjs'

const input = `
30373
25512
65332
33549
35390
`
  .split('\n')
  .slice(1, -1)

test('Part 1', (t) => {
  const expected = 21
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 8
  t.is(part2(input), expected)
})
