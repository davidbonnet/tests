require("@std/esm")

import { test } from 'tap'
import { getAnswer } from './index.js'

test('ok', assert => {
  assert.equal(getAnswer(), 42)
  assert.done()
})
