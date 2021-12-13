import run from '.'
// import { expectedResult } from './data/result'

describe('Run all', () => {
  it('returns the expected values', () => {
    const result = run()
    expect(result.part1).toEqual(689)
    expect(result.part2.letters).toStrictEqual('RLBCJGLU')
    // expect(result.part2.grid).toStrictEqual(expectedResult)
  })
})
