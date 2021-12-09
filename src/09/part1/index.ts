import { splitStringArrToNumbers } from '../../helpers'
import { getLowestPoints } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  const { lowPoints } = getLowestPoints(data)

  return lowPoints.reduce((acc, item) => acc + item + 1, 0)
}

export default part1
