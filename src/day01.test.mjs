import test from 'ava'
import { part1, part2 } from './day01.mjs'

const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`
  .trim()
  .split('\n')

const is = test.macro((t, input, expected) => {
  t.is(input, expected)
})

test('Part 1', (t) => {
  const expected = 24000
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 45000
  t.is(part2(input), expected)
})

test('Part 1 (macro)', is, part1(input), 24000)
test('Part 2 (macro)', is, part2(input), 45000)
