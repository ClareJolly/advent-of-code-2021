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

  const filtered = data.filter(({ x1, x2, y1, y2 }) => x1 === x2 || y1 === y2)

  const rows = getHighestPerDirection(filtered, 'y')
  const columns = getHighestPerDirection(filtered, 'x')

  const grid = create2DArray(rows + 1, columns + 1, () => 0)

  filtered.forEach(coOrds => {
    const { direction, xIncrementMultiplier, yIncrementMultiplier } = getDirections(coOrds)

    const { x1, x2, y1, y2 } = coOrds
    if (direction === 'horizontal') {
      for (
        let x = x1!;
        // xIncrementMultiplier > 0 ? x <= x2! : x >= x2!;
        // getCondition(xIncrementMultiplier, x, x2);
        getCondition(x1, x, x2);
        x += xIncrementMultiplier * 1
      ) {
        grid[y1][x]++
      }
    }

    if (direction === 'vertical') {
      for (
        let y = y1!;
        getCondition(y1, y, y2);
        // yIncrementMultiplier > 0 ? y <= y2 : y >= y2;
        y += yIncrementMultiplier * 1
      ) {
        grid[y][x1]++
      }
    }
  })

  return getOverlaps(grid)
}

export default part2
