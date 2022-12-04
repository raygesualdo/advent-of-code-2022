export const add = (a, b) => a + b

export const sum = (arr) => arr.reduce(add, 0)

export const toInt = (str) => Number.parseInt(str, 10)

export const intersect = (enum1, enum2) => {
  const a = new Set(enum1)
  const b = new Set(enum2)
  const c = new Set([...a].filter((i) => b.has(i)))
  return Array.from(c)
}
