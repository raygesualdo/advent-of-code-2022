import assert from 'node:assert'
import { writeFileSync } from 'node:fs'
import { parseArgs } from 'node:util'

const {
  positionals: [rawDay],
} = parseArgs({ allowPositionals: true })

assert(rawDay, 'Please provide a day to scaffold.')

const day = rawDay.padStart(2, '0')

writeFileSync(`data/day${day}.txt`, '', 'utf-8')
writeFileSync(`src/day${day}.mjs`, moduleContent(), 'utf-8')
writeFileSync(`src/day${day}.test.mjs`, testContent(), 'utf-8')

function moduleContent() {
  return `
export function part1(input) {
}

export function part2(input) {
}
  `.trim()
}

function testContent() {
  return `
import test from 'ava'
import { part1, part2 } from './day${day}.mjs'

const input = \`\`
  .split('\\n')
  .slice(1, -1)

test('Part 1', (t) => {
  const expected = null
  t.is(part1(input), expected)
})

test.skip('Part 2', (t) => {
  const expected = null
  t.is(part2(input), expected)
})
  `.trim()
}
