import { sum, toInt } from './utils.mjs'

const sumDirs = (dirs) => {
  return sum(Object.values(dirs).filter((value) => value <= 100_000))
}

const getDirSizes = (lines) => {
  const fs = {}
  const currentDir = []
  for (const line of lines) {
    if (line.startsWith('$ ls')) continue
    if (line.startsWith('dir')) continue

    if (line === '$ cd /') {
      currentDir.push('ROOT')
      continue
    }

    if (line.startsWith('$ cd')) {
      const location = line.split(' ').at(-1)
      if (location === '..') {
        currentDir.pop()
      } else {
        currentDir.push(location)
      }
      continue
    }

    const fileSize = toInt(line.split(' ')[0])
    for (let index = 1; index <= currentDir.length; index++) {
      const path = currentDir.slice(0, index).join('/')
      fs[path] = (fs[path] ?? 0) + fileSize
    }
  }

  return fs
}

const findDirToDelete = (dirs) => {
  const threshold = 30_000_000 - 70_000_000 + dirs.ROOT
  return Object.entries(dirs)
    .sort((a, b) => a[1] - b[1])
    .find(([, size]) => size >= threshold)[1]
}

export function part1(input) {
  const dirSizes = getDirSizes(input)
  return sumDirs(dirSizes)
}

export function part2(input) {
  const dirSizes = getDirSizes(input)
  return findDirToDelete(dirSizes)
}
