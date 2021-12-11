import { splitStringArrToNumbers } from '../../helpers'
import { checkIsSync, processStep } from '../helpers'

const part2 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  let step = 0
  while (!checkIsSync(data)) {
    processStep(data)
    step++
  }

  return step
}

export default part2
