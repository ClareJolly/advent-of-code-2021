import { multiplyArrayItems, filteringList } from '.'

describe('helpers', () => {
  describe('multiplyArrayItems', () => {
    it('returns the correct values when passed a valid array', () => {
      const params = { part: 1, arr: [1, 2, 3, 4, 5], expectedLength: 5 }
      const result = multiplyArrayItems(params)

      expect(result).toEqual(120)
    })

    it('returns the correct values when passed an empty array', () => {
      const params = { part: 1, arr: [], expectedLength: 5 }
      const result = multiplyArrayItems(params)

      expect(result).toBeUndefined()
    })
  })

  describe('filteringList', () => {
    it('returns the correct values', () => {
      const result = filteringList([20, 2000, 3, 4, 5], 2020)

      expect(result).toEqual([20, 2000])
    })
  })
})
