import run from '.'

describe('Run all', () => {
  it('returns the expected values', () => {
    const result = run()
    expect(result).toEqual({ part1: 2851, part2: 10002813279337 })
  })
})
