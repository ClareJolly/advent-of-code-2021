import { getTotal } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = inputData[0].split(',').map(d => Number(d))

  return getTotal(data, (item: number, i: number) => Math.abs(item - i))
}

export default part1
