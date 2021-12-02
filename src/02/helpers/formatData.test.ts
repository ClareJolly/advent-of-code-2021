import { getDataForTest } from '../../../test/unit/utils'

import { formatData } from '.'

const { testData } = getDataForTest(__dirname)

describe('formatData', () => {
  it('returns the correct data', () => {
    const result = formatData(testData)
    expect(result).toStrictEqual([
      ['forward', 5],
      ['down', 5],
      ['forward', 8],
      ['up', 3],
      ['down', 8],
      ['forward', 2],
    ])
  })
})
