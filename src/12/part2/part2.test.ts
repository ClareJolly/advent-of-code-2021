import part2 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname, [1, 2, 3])

describe('part2', () => {
  it('returns the expected answer with test data 1', () => {
    const result = part2(testData[0])
    expect(result).toStrictEqual(36)
  })
  it('returns the expected answer with real data', () => {
    const result = part2(realData)
    expect(result).toStrictEqual(155477)
  })
})
