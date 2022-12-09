import { toInt } from './utils.mjs'

const createGrid = (lines) => {
  const rows = lines.map((line) => line.split('').map(toInt))
  const columns = rows[0].map((_, i) => rows.map((row) => row[i]))
  const xLength = columns.length
  const yLength = rows.length

  function isEdge(x, y) {
    return x === 0 || x === xLength - 1 || y === 0 || y === yLength - 1
  }

  function isVisible(x, y) {
    if (isEdge(x, y)) return true
    const height = columns[x][y]
    const north = columns[x].slice(0, y).some((v) => v >= height)
    const south = columns[x].slice(y + 1).some((v) => v >= height)
    const east = rows[y].slice(0, x).some((v) => v >= height)
    const west = rows[y].slice(x + 1).some((v) => v >= height)
    return !north || !south || !east || !west
  }

  function scenicScore(x, y) {
    const height = columns[x][y]
    const north =
      columns[x]
        .slice(0, y)
        .reverse()
        .findIndex((v) => v >= height) + 1 || columns[x].slice(0, y).length
    const south =
      columns[x].slice(y + 1).findIndex((v) => v >= height) + 1 ||
      columns[x].slice(y + 1).length
    const east =
      rows[y]
        .slice(0, x)
        .reverse()
        .findIndex((v) => v >= height) + 1 || rows[y].slice(0, x).length
    const west =
      rows[y].slice(x + 1).findIndex((v) => v >= height) + 1 ||
      rows[y].slice(x + 1).length
    return north * south * east * west
  }

  return { columns, rows, xLength, yLength, isVisible, scenicScore }
}

export function part1(input) {
  const grid = createGrid(input)
  let visible = 0

  for (let y = 0; y < grid.yLength; y++) {
    for (let x = 0; x < grid.xLength; x++) {
      if (grid.isVisible(x, y)) {
        visible += 1
        continue
      }
    }
  }

  return visible
}

export function part2(input) {
  const grid = createGrid(input)
  let maxScenicScore = 0

  for (let y = 0; y < grid.yLength; y++) {
    for (let x = 0; x < grid.xLength; x++) {
      maxScenicScore = Math.max(maxScenicScore, grid.scenicScore(x, y))
    }
  }

  return maxScenicScore
}
