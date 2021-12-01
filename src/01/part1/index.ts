import { arrToNumbers } from '../../helpers'

const part1 = (inputData: string[]): number => {
  const data = arrToNumbers(inputData)

  let increase = 0

  data.forEach((depth, i) => {
    if (i > 0) {
      if (depth > data[i - 1]) increase++
    }
  })
  return increase
}

export default part1
