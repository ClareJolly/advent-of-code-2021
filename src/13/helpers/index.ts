import { batchByBlankLines, create2DArray } from '../../helpers'

export const parseInput = (inputData: string[]) => {
  const [dotsInput, instructionsInput] = batchByBlankLines(inputData)

  const dots = dotsInput.map(d => d.split(',').map(d => Number(d)))
  // console.log('🚀 ~ file: index.ts ~ line 7 ~ part1 ~ dots', dots)

  const instructions = instructionsInput.map(i => {
    const a = i.split(' ')[2]
    const b = a.split('=')
    return {
      axis: b[0],
      num: Number(b[1]),
    }
  })

  return { dots, instructions }
}

export const getGrid = (inputData: string[], instructionsToCheck?: number) => {
  const { dots, instructions } = parseInput(inputData)

  const highX = Math.max(...dots.map(([d]) => d))
  const highY = Math.max(...dots.map(([_, d]) => d))

  let grid = create2DArray<string>(highY + 1, highX, () => '#')

  dots.forEach(([x, y]) => {
    grid[y][x] = '.'
  })

  instructions.slice(0, instructionsToCheck).forEach(({ axis, num }) => {
    if (axis === 'y') {
      grid[num] = grid[num].map(_ => '-')
      grid.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (y > num && cell === '.') {
            grid[num - (y - num)][x] = '.'
          }
        })
      })
      grid.splice(num)
    }

    if (axis === 'x') {
      grid.forEach((_, i) => {
        grid[i][num] = '|'
      })
      grid.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (x > num && cell === '.') {
            grid[y][num - (x - num)] = '.'
          }
        })
      })
      grid = grid.map(row => row.slice(0, num))
    }
  })
  return grid
}
