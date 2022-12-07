import test from 'ava'
import { part1, part2 } from './day06.mjs'

test('Part 1', (t) => {
  t.is(part1(['mjqjpqmgbljsphdztnvjfqwrcgsmlb']), 7)
  t.is(part1(['bvwbjplbgvbhsrlpgdmjqwftvncz']), 5)
  t.is(part1(['nppdvjthqldpwncqszvftbrmjlhg']), 6)
  t.is(part1(['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg']), 10)
  t.is(part1(['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw']), 11)
})

test('Part 2', (t) => {
  t.is(part2(['mjqjpqmgbljsphdztnvjfqwrcgsmlb']), 19)
  t.is(part2(['bvwbjplbgvbhsrlpgdmjqwftvncz']), 23)
  t.is(part2(['nppdvjthqldpwncqszvftbrmjlhg']), 23)
  t.is(part2(['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg']), 29)
  t.is(part2(['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw']), 26)
})
