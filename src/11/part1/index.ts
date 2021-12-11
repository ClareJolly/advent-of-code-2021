import { splitStringArrToNumbers } from '../../helpers'

const part1 = (inputData: string[]) => {
  const testInputData = ['11111', '19991', '19191', '19991', '11111']
  const data = splitStringArrToNumbers(testInputData)
  //   const data = splitStringArrToNumbers(inputData)
  console.log('🚀 ~ file: index.ts ~ line 5 ~ part1 ~ data', data)
}

export default part1
