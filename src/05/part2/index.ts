import {
  create2DArray,
  getCondition,
  getDirections,
  getHighestPerDirection,
  getOverlaps,
  getVentLines,
} from '../helpers'

const part2 = (inputData: string[]) => {
  const data = getVentLines(inputData)

  const filtered = [...data]
  //   const filtered = data.filter(({ x1, x2, y1, y2 }) => x1 !== x2 && y1 !== y2)

  const rows = getHighestPerDirection(data, 'y')
  const columns = getHighestPerDirection(data, 'x')

  const grid = create2DArray(rows + 1, columns + 1, () => 0)

  filtered.forEach(coOrds => {
    const { direction, xIncrementMultiplier, yIncrementMultiplier } = getDirections(coOrds)

    const { x1, x2, y1, y2 } = coOrds

    if (direction === 'diagonal') {
      let position = [y1, x1]
      let end = false

      while (!end) {
        grid[position[0]][position[1]]++
        if (position[0] === y2 && position[1] === x2) end = true
        position[0] = y1 < y2 ? position[0] + 1 : position[0] - 1
        position[1] = x1 < x2 ? position[1] + 1 : position[1] - 1
      }
    }

    if (direction === 'horizontal') {
      for (let x = x1!; getCondition(x1, x, x2); x += xIncrementMultiplier * 1) {
        grid[y1][x]++
      }
    }

    if (direction === 'vertical') {
      for (let y = y1!; getCondition(y1, y, y2); y += yIncrementMultiplier * 1) {
        grid[y][x1]++
      }
    }
  })

  return getOverlaps(grid)
}

export default part2
