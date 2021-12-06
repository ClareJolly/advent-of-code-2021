import part2 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname)

describe('part2', () => {
  it('returns the expected answer with test data', () => {
    const result = part2(testData, 256)
    expect(result).toStrictEqual(26984457539)
  })
  it('returns the expected answer with real data', () => {
    const result = part2(realData, 256)
    expect(result).toStrictEqual(1631647919273)
  })
})
