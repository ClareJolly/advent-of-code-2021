import part1 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname, [1, 2, 3])

describe('part1', () => {
  it('returns the expected answer with test data 1', () => {
    const result = part1(testData[0])
    expect(result).toStrictEqual(10)
  })
  it('returns the expected answer with test data 2', () => {
    const result = part1(testData[1])
    expect(result).toStrictEqual(19)
  })
  it('returns the expected answer with test data 3', () => {
    const result = part1(testData[2])
    expect(result).toStrictEqual(226)
  })
  it('returns the expected answer with real data', () => {
    //   const result = part1(realData)
    //   expect(result).toStrictEqual()
  })
})
