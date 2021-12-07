import { getTotal } from '../helpers'

const gauss = (n: number): number => (n * (n + 1)) / 2

const part2 = (inputData: string[]) => {
  const data = inputData[0].split(',').map(d => Number(d))

  return getTotal(data, (item: number, i: number) => gauss(Math.abs(item - i)))
}

export default part2
