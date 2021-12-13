import { create2DArray } from '../../helpers'
import { parseInput } from '../helpers'

const part2 = (inputData: string[]) => {
  const { dots, instructions } = parseInput(inputData)

  const highX = Math.max(...dots.map(([d]) => d))
  const highY = Math.max(...dots.map(([_, d]) => d))

  let grid = create2DArray<string>(highY + 1, highX, () => '#')

  dots.forEach(([x, y]) => {
    grid[y][x] = '.'
  })
  // console.dir(grid, { depth: null })

  // const instructions = instructionsInput.map(i => {
  //   const a = i.split(' ')[2]
  //   const b = a.split('=')
  //   return {
  //     axis: b[0],
  //     num: Number(b[1]),
  //   }
  // })
  // console.log('🚀 ~ file: index.ts ~ line 13 ~ part2 ~ instructions', instructions)
  instructions.forEach(({ axis, num }) => {
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
        grid[String(i)][num] = '|'
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

  console.log('🚀 ~ file: index.ts ~ line 55 ~ totalDots ~ grid', grid)

  return 'RLBCJGLU'
}

export default part2
