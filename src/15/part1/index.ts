import { parseAndSplitStringArrToNumbers } from '../../helpers'
import { getPath } from '../helpers'

const part1 = (inputData: string[]): number => {
  const data = parseAndSplitStringArrToNumbers(inputData)

  return getPath(data.length, (y, x) => data[y][x])

  // return [
  //   solve(L, (y, x) => data[y][x]),
  //   solve(
  //     L * 5,
  //     (y, x) => ((data[y % L][x % L] + Math.floor(x / L) + Math.floor(y / L) + 8) % 9) + 1,
  //   ),
  // ]
}

export default part1
