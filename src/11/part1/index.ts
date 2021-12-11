import { splitStringArrToNumbers } from '../../helpers'
import { processStep } from '../helpers'

const part1 = (inputData: string[]) => {
  //   const testInputData = ['11111', '19991', '19191', '19991', '11111']
  //   const data = splitStringArrToNumbers(testInputData)
  const data = splitStringArrToNumbers(inputData)

  let totalFlashes = 0
  for (let i = 0; i < 100; i++) {
    totalFlashes += processStep(data)
  }

  return totalFlashes
}

export default part1
