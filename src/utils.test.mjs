import test from 'ava'
import { chunkInto } from './utils.mjs'

test('chunkInto', (t) => {
  t.deepEqual(chunkInto([1, 2], 1), [[1], [2]])
  t.deepEqual(chunkInto([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]])
})
