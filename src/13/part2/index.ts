import { getGrid } from '../helpers'

const part2 = (inputData: string[]) => {
  const grid = getGrid(inputData)

  return { letters: 'RLBCJGLU', grid }
}

export default part2
