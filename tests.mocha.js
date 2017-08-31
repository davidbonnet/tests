import { getAnswer } from './'

describe('getAnswer', () => {
  it('returns the answer', () => {
    if (getAnswer() !== 42) {
      throw new Error('Answer is not 42.')
    }
  })
})
