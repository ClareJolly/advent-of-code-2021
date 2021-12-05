const create2DArray = (
  rows: number,
  columns: number,
  value: (x: number, y: number) => number,
): number[][] => {
  var array = new Array(rows)
  for (var i = 0; i < rows; i++) {
    array[i] = new Array(columns)
    for (var j = 0; j < columns; j++) {
      array[i][j] = value(i, j)
    }
  }

  return array
}

const getHighestPerDirection = (data: StartEnd[], axis: 'x' | 'y') =>
  Math.max(
    ...data.map(d =>
      Math.max(
        ...Object.entries(d)
          .filter(([a]) => a === `${axis}1` || a === `${axis}2`)
          .map(([_, b]) => b),
      ),
    ),
  )

interface StartEnd {
  x1: number
  y1: number
  x2: number
  y2: number
}

const part1 = (inputData: string[]) => {
  const data = inputData.reduce((acc, item) => {
    const value = {} as StartEnd

    const [a, b] = item.split(' -> ')

    const [x1, y1] = a.split(',')
    value.x1 = Number(x1)
    value.y1 = Number(y1)

    const [x2, y2] = b.split(',')
    value.x2 = Number(x2)
    value.y2 = Number(y2)

    acc.push(value)
    return acc
  }, [] as StartEnd[])

  const filtered = data.filter(({ x1, x2, y1, y2 }) => x1 === x2 || y1 === y2)

  const rows = getHighestPerDirection(filtered, 'y')
  const columns = getHighestPerDirection(filtered, 'x')

  const grid = create2DArray(rows + 1, columns + 1, () => 0)

  filtered.forEach(({ x1, x2, y1, y2 }) => {
    const horizontal = y1 === y2
    const vertical = x1 === x2

    if (horizontal) {
      const highX = x1 - x2 < 0 ? x2 : x1
      const lowX = x1 - x2 < 0 ? x1 : x2

      for (let x = lowX; x <= highX; x++) {
        grid[y1][x]++
      }
    }

    if (vertical) {
      const highY = y1 - y2 < 0 ? y2 : y1
      const lowY = y1 - y2 < 0 ? y1 : y2
      for (let y = lowY; y <= highY; y++) {
        grid[y][x1]++
      }
    }
  })

  return grid.reduce((acc, item) => {
    acc += item.filter(i => i > 1).length
    return acc
  }, 0)
}

export default part1
