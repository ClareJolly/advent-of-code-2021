import { parseAndSplitStringArrToNumbers } from '../../helpers'
import { getPath } from '../helpers'

const part2 = (inputData: string[]): number => {
  const data = parseAndSplitStringArrToNumbers(inputData)

  return getPath(
    data.length * 5,
    (y, x) =>
      ((data[y % data.length][x % data.length] +
        Math.floor(x / data.length) +
        Math.floor(y / data.length) +
        8) %
        9) +
      1,
  )
}

export default part2
