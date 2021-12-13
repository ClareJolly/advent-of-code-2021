import part2 from '.'
import { getDataForTest } from '../../../test/unit/utils'

// import { expectedResult } from '../data/result'

const { realData } = getDataForTest(__dirname)

describe('part2', () => {
  it('returns the expected answer with real data', () => {
    const result = part2(realData)
    expect(result.letters).toStrictEqual('RLBCJGLU')
    // expect(result.grid).toStrictEqual(expectedResult)
  })
})
