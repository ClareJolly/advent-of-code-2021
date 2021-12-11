import part1 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname)

describe('part1', () => {
  it('returns the expected answer with test data', () => {
    const result = part1(testData)
    expect(result).toStrictEqual(1656)
  })
  it('returns the expected answer with real data', () => {
    //   const result = part1(realData)
    //   expect(result).toStrictEqual()
  })
})
