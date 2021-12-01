import { arrToNumbers } from '../../helpers'
import getIncreases from '../helpers/getIncreases'

const part2 = (inputData: string[]): number => {
  const data = arrToNumbers(inputData)

  let batches: number[] = []

  data.forEach((depth, i) => {
    if (i < data.length - 2) {
      batches.push(depth + data[i + 1] + data[i + 2])
    }
  })
  return getIncreases(batches)
}

export default part2
