const chunk = (arr) => {
  const chunks = [[]]
  for (const item of arr) {
    if (!item) {
      chunks.push([])
    } else {
      chunks.at(-1).push(item)
    }
  }
  return chunks
}
const sum = (arr) => arr.reduce((acc, num) => acc + Number.parseInt(num, 10), 0)

export function part1(input) {
  const chunks = chunk(input)
  const sums = chunks.map(sum)
  return Math.max(...sums)
}

export function part2(input) {
  const chunks = chunk(input)
  const sums = chunks.map(sum)
  return sum(sums.sort((a, b) => b - a).slice(0, 3))
}
