const isAllUnique = (arr) => arr.length === new Set(arr).size

export function part1([input]) {
  const current = []
  for (const [index, letter] of input.split('').entries()) {
    if (index < 4) {
      current.push(letter)
      continue
    }
    if (isAllUnique(current)) return index
    current.shift()
    current.push(letter)
  }
}

export function part2([input]) {
  const current = []
  for (const [index, letter] of input.split('').entries()) {
    if (index < 14) {
      current.push(letter)
      continue
    }
    if (isAllUnique(current)) return index
    current.shift()
    current.push(letter)
  }
}
