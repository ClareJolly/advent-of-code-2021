import part2 from '.'
import { fileToArray } from '../../helpers'
import path from 'path'

const testData = fileToArray(path.join(__dirname, '../data/testData.txt'))
const realData = fileToArray(path.join(__dirname, '../data/input.txt'))

describe('part2', () => {
  it('returns the expected answer with test data', () => {
    const result = part2(testData)

    expect(result).toStrictEqual(5)
  })

  it('returns the expected answer with real data', () => {
    const result = part2(realData)

    expect(result).toStrictEqual(1311)
  })
})
