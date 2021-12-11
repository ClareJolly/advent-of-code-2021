import part1 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname)

describe('part1', () => {
  it('returns the expected answer with small test data', () => {
    const smallTest = ['11111', '19991', '19191', '19991', '11111']
    const result = part1(smallTest)
    expect(result).toStrictEqual(9)
  })
  it('returns the expected answer with test data', () => {
    const result = part1(testData)
    expect(result).toStrictEqual(1656)
  })
  it('returns the expected answer with real data', () => {
    const result = part1(realData)
    expect(result).toStrictEqual(1637)
  })
})
