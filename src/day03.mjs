export function chunkd(array, chunkSize) {
  const length = array.length
  const chunks = []
  for (let start = 0; start < length; start += chunkSize) {
    chunks.push(array.slice(start, start + chunkSize))
  }
  return chunks
}

const splitString = (str) => {
  return [str.slice(0, str.length / 2), str.slice(str.length / 2)]
}

const letterPriority = (letter) => {
  return letter.codePointAt(0) - (letter === letter.toLowerCase() ? 96 : 38)
}

const intersection = (str1, str2) => {
  const a = new Set(str1)
  const b = new Set(str2)
  const intersect = new Set([...a].filter((i) => b.has(i)))
  return Array.from(intersect).at(0)
}

const intersection2 = (str1, str2) => {
  const a = new Set(str1)
  const b = new Set(str2)
  const intersect = new Set([...a].filter((i) => b.has(i)))
  return Array.from(intersect).join('')
}

const sum = (arr) => arr.reduce((acc, num) => acc + num, 0)

export function part1(input) {
  const compartments = input.map(splitString)
  const commonLetters = compartments.map(([a, b]) => intersection(a, b))
  const priorities = commonLetters.map(letterPriority)
  return sum(priorities)
}

export function part2(input) {
  const groups = chunkd(input, 3)
  const commonLetters = groups.map((group) => {
    return group.map((line) => new Set(line)).reduce(intersection2)
  })
  const priorities = commonLetters.map(letterPriority)
  return sum(priorities)
}
