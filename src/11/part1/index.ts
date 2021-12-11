import { splitStringArrToNumbers } from '../../helpers'
import { processStep } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  let totalFlashes = 0
  let step = 0
  for (step; step < 100; step++) {
    totalFlashes += processStep(data)
  }

  return totalFlashes
}

export default part1
