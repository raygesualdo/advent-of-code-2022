import test from 'ava'
import { part1, part2 } from './day05.mjs'

const input = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`
  .split('\n')
  .slice(1, -1)

test('Part 1', (t) => {
  const expected = 'CMZ'
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 'MCD'
  t.is(part2(input), expected)
})
