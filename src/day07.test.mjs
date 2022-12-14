import test from 'ava'
import { part1, part2 } from './day07.mjs'

const input = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`
  .split('\n')
  .slice(1, -1)

test('Part 1', (t) => {
  const expected = 95437
  t.is(part1(input), expected)
})

test('Part 2', (t) => {
  const expected = 24933642
  t.is(part2(input), expected)
})
