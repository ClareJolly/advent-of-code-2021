import { Direction, Directions, Grid, VentLines } from '../types'

export const getVentLines = (inputData: string[]): VentLines[] => {
  return inputData.reduce((acc, item) => {
    const value = {} as VentLines

    const [a, b] = item.split(' -> ')

    const [x1, y1] = a.split(',')
    value.x1 = Number(x1)
    value.y1 = Number(y1)

    const [x2, y2] = b.split(',')
    value.x2 = Number(x2)
    value.y2 = Number(y2)

    acc.push(value)
    return acc
  }, [] as VentLines[])
}

export const create2DArray = (
  rows: number,
  columns: number,
  value: (x: number, y: number) => number,
): Grid => {
  var array = new Array(rows)
  for (var i = 0; i < rows; i++) {
    array[i] = new Array(columns)
    for (var j = 0; j < columns; j++) {
      array[i][j] = value(i, j)
    }
  }

  return array
}

export const getHighestPerDirection = (data: VentLines[], axis: 'x' | 'y') =>
  Math.max(
    ...data.map(d =>
      Math.max(
        ...Object.entries(d)
          .filter(([a]) => a === `${axis}1` || a === `${axis}2`)
          .map(([_, b]) => b),
      ),
    ),
  )

export const getDirections = ({ x1, x2, y1, y2 }: VentLines): Directions => {
  let direction = 'diagonal'
  if (y1 === y2) direction = 'horizontal'
  if (x1 === x2) direction = 'vertical'

  let high
  let low
  let WE
  let NS
  if (direction === 'horizontal') {
    high = x1 - x2 < 0 ? x2 : x1
    low = x1 - x2 < 0 ? x1 : x2
  }
  if (direction === 'vertical') {
    high = y1 - y2 < 0 ? y2 : y1
    low = y1 - y2 < 0 ? y1 : y2
  }
  //   if (direction === 'diagonal') {
  //     WE = x1 < x2 ? 'W' : 'E'
  //     NS = y1 > y2 ? 'N' : 'S'
  //   }

  return {
    direction: direction as Direction,
    high,
    low,
    // angle: { WE, NS },
  }
}

export const getOverlaps = (grid: Grid) => {
  return grid.reduce((acc, item) => {
    acc += item.filter(i => i > 1).length
    return acc
  }, 0)
}
