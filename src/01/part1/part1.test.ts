import part1 from '.'
import { fileToArray } from '../../helpers'
import path from 'path'

const testData = fileToArray(path.join(__dirname, '../data/testData.txt'))
const realData = fileToArray(path.join(__dirname, '../data/input.txt'))

describe('part1', () => {
  it('returns the expected answer with test data', () => {
    const result = part1(testData)

    expect(result).toStrictEqual(7)
  })

  it('returns the expected answer with real data', () => {
    const result = part1(realData)

    expect(result).toStrictEqual(1288)
  })
})
