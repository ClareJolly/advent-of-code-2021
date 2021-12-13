import { getGrid } from '../helpers'

const part1 = (inputData: string[]) => {
  const grid = getGrid(inputData, 1) // const { dots, instructions } = parseInput(inputData)

  const totalDots = grid.reduce((acc, row) => {
    const rowTotal = row.filter(r => r === '.').length
    return acc + rowTotal
  }, 0)
  return totalDots
}

export default part1
