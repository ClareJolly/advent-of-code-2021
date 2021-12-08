const numberConfig = [
  'abcefg',
  'cf',
  'acdeg',
  'acdfg',
  'bcdf',
  'abdfg',
  'abdefg',
  'acf',
  'abcdefg',
  'abcdfg',
]

const part1 = (inputData: string[]) => {
  let codes = { 1: 0, 4: 0, 7: 0, 8: 0 }

  inputData.forEach(x => {
    let pattern = x.split(' | ')[1]

    pattern.split(' ').forEach(code => {
      switch (code.length) {
        case 2:
          codes[1] = codes[1] + 1
          break
        case 3:
          codes[7] = codes[7] + 1
          break
        case 4:
          codes[4] = codes[4] + 1
          break
        case 7:
          codes[8] = codes[8] + 1
          break
        default:
          break
      }
    })
  })

  const result = Object.values(codes).reduce((acc, num) => acc + num)

  return result
}

export default part1
