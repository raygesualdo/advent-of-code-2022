import assert from 'node:assert'
import { readFileSync } from 'node:fs'
import { parseArgs } from 'node:util'

const {
  positionals: [rawDay, part],
} = parseArgs({ allowPositionals: true })

assert(rawDay, 'Please provide a specific day to solve.')

const day = rawDay.padStart(2, '0')
const module = await getModule()
const input = getInput()

if (!part) {
  solve(day, '1')
  solve(day, '2')
} else {
  solve(day, part)
}

async function getModule() {
  try {
    const module = await import(`../src/day${day}.mjs`)
    return module
  } catch {
    throw new Error(`Module "day${day}.mjs" does not exist.`)
  }
}

function getInput() {
  try {
    const text = readFileSync(`data/day${day}.txt`, 'utf-8')
    return text.split('\n')
  } catch {
    throw new Error(`Data file "day${day}.txt" does not exist.`)
  }
}

function solve(day, part) {
  const result = module[`part${part}`](input)
  console.log(`Day ${day}, Part ${part}: ${result}`)
}
