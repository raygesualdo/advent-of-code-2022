const toTuples = (line) =>
  line
    .split(',')
    .map((pair) => pair.split('-').map((v) => Number.parseInt(v, 10)))

const isWithin = ([a1, b1], [a2, b2]) => {
  if (a1 >= a2 && b1 <= b2) return true
  if (a2 >= a1 && b2 <= b1) return true
  return false
}

const hasAnyOverlap = ([a1, b1], [a2, b2]) => {
  if (a1 >= a2 && a1 <= b2) return true
  if (b1 >= b2 && b1 <= b2) return true
  if (a2 >= a1 && a2 <= b1) return true
  if (b2 >= a1 && b2 <= b1) return true
  return false
}

export function part1(input) {
  const tuples = input.map(toTuples)
  return tuples.filter(([a, b]) => isWithin(a, b)).length
}

export function part2(input) {
  const tuples = input.map(toTuples)
  return tuples.filter(([a, b]) => hasAnyOverlap(a, b)).length
}
