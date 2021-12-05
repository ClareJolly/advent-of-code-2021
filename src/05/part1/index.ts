import {
  create2DArray,
  getDirections,
  getHighestPerDirection,
  getOverlaps,
  getVentLines,
} from '../helpers'

const part1 = (inputData: string[]) => {
  const data = getVentLines(inputData)

  //   const filtered = data.filter(({ x1, x2, y1, y2 }) => x1 === x2 || y1 === y2)
  const filtered = data.filter(({ x1, x2, y1, y2 }) => x1 !== x2 && y1 !== y2)
  console.log('🚀 ~ file: index.ts ~ line 14 ~ part1 ~ filtered', filtered)

  const rows = getHighestPerDirection(filtered, 'y')
  const columns = getHighestPerDirection(filtered, 'x')

  const grid = create2DArray(rows + 1, columns + 1, () => 0)

  filtered.forEach(({ x1, x2, y1, y2 }) => {
    const { direction, high, low, angle } = getDirections({ x1, x2, y1, y2 })
    console.log('🚀 ~ file: index.ts ~ line 21 ~ filtered.forEach ~ angle', angle)
    console.log('🚀 ~ file: index.ts ~ line 21 ~ filtered.forEach ~ low', low)
    console.log('🚀 ~ file: index.ts ~ line 21 ~ filtered.forEach ~ high', high)
    console.log('🚀 ~ file: index.ts ~ line 21 ~ filtered.forEach ~ direction', direction)

    if (direction === 'horizontal') {
      for (let x = low!; x <= high!; x++) {
        grid[y1][x]++
      }
    }

    if (direction === 'vertical') {
      for (let y = low!; y <= high!; y++) {
        grid[y][x1]++
      }
    }
  })

  return getOverlaps(grid)
}

export default part1
