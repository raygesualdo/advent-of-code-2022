import { chunkByBlankLines, chunkInto, toInt } from './utils.mjs'

const parseBoxes = (lines) => {
  const [header, ...boxLines] = lines.reverse()
  const numberOfColumns = header.replace(/[^0-9]/g, '').length
  const boxes = new Array(numberOfColumns).fill(null).map(() => [])
  for (const line of boxLines) {
    for (const [index, column] of chunkInto(line, 4).entries()) {
      if (!column.trim()) continue
      boxes[index].push(column[1])
    }
  }
  return boxes
}

const parseInstructions = (line) => {
  const {
    groups: { amount, from, to },
  } = line.match(/move (?<amount>\d+) from (?<from>\d+) to (?<to>\d+)/i)
  return [amount, from, to].map(toInt)
}

const doTimes = (times, callback) => {
  for (let iterations = 0; iterations < times; iterations++) {
    callback()
  }
}

const makeMoves = (boxes, instructions) => {
  for (const [amount, from, to] of instructions) {
    const fromIndex = from - 1
    const toIndex = to - 1
    doTimes(amount, () => {
      boxes[toIndex].push(boxes[fromIndex].pop())
    })
  }
  return boxes
}

const makeMovesMultiple = (boxes, instructions) => {
  for (const [amount, from, to] of instructions) {
    const fromIndex = from - 1
    const toIndex = to - 1
    boxes[toIndex].push(...boxes[fromIndex].splice(amount * -1))
  }
  return boxes
}

export function part1(input) {
  const [rawBoxes, rawInstructions] = chunkByBlankLines(input)
  const boxes = parseBoxes(rawBoxes)
  const instructions = rawInstructions.map(parseInstructions)
  const movedBoxes = makeMoves(boxes, instructions)
  return movedBoxes.map((x) => x.at(-1)).join('')
}

export function part2(input) {
  const [rawBoxes, rawInstructions] = chunkByBlankLines(input)
  const boxes = parseBoxes(rawBoxes)
  const instructions = rawInstructions.map(parseInstructions)
  const movedBoxes = makeMovesMultiple(boxes, instructions)
  return movedBoxes.map((x) => x.at(-1)).join('')
}
