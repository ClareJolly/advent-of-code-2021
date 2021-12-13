import { batchByBlankLines, create2DArray } from '../../helpers'

const part1 = (inputData: string[]) => {
  const [dotsInput, instructionsInput] = batchByBlankLines(inputData)

  const dots = dotsInput.map(d => d.split(',').map(d => Number(d)))
  // console.log('🚀 ~ file: index.ts ~ line 7 ~ part1 ~ dots', dots)

  const highX = Math.max(...dots.map(([d]) => d))
  const highY = Math.max(...dots.map(([_, d]) => d))

  let grid = create2DArray<string>(highY + 1, highX, () => '#')

  dots.forEach(([x, y]) => {
    grid[y][x] = '.'
  })
  // console.dir(grid, { depth: null })

  const instructions = instructionsInput.map(i => {
    const a = i.split(' ')[2]
    const b = a.split('=')
    return {
      axis: b[0],
      num: Number(b[1]),
    }
  })
  // console.log('🚀 ~ file: index.ts ~ line 13 ~ part1 ~ instructions', instructions)
  instructions.slice(0, 1).forEach(({ axis, num }) => {
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
  // console.dir(grid, { depth: null })
  // console.log(' grid.length', grid.length)

  const totalDots = grid.reduce((acc, row) => {
    const rowTotal = row.filter(r => r === '.').length
    return acc + rowTotal
  }, 0)
  return totalDots
}

export default part1
