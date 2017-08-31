import { test } from 'tap'
import { getAnswer } from './'

test('ok', assert => {
  assert.equal(getAnswer(), 42)
  assert.done()
})
