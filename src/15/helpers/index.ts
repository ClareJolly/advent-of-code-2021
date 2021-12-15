import { Cells, Graph } from '../types'

export const adjacentConfig = [
  { yOffset: -1, xOffset: 0 },
  { yOffset: 1, xOffset: 0 },
  { yOffset: 0, xOffset: -1 },
  { yOffset: 0, xOffset: 1 },
]

export const parseData = (inputData: string[], rows?: number) => {
  const data = inputData.slice(0, rows).map(d => d.split('').map(d => Number(d)))
  console.log('  ~ file: index.ts ~ line 10 ~ part1 ~ data', data)

  // let grid = [...new Set(data)]

  // grid[0][0] = -1
  // console.log('  ~ file: index.ts ~ line 15 ~ part1 ~ grid', grid)

  const cells: Cells = { '0,0': { adjacent: {} } }

  data.forEach((row, y) => {
    row.forEach((_, x) => {
      cells[`${y},${x}`] = { adjacent: {} }
      adjacentConfig.forEach(({ yOffset, xOffset }) => {
        const val = data[yOffset + y]?.[xOffset + x]
        if (val && `${yOffset + y},${xOffset + x}` !== '0,0') {
          cells[`${y},${x}`].adjacent[`${yOffset + y},${xOffset + x}`] = val
        }
      })
    })
  })

  for (const cell in cells) {
    let vals: number[] = []

    for (const val in cells[cell].adjacent) {
      vals.push(cells[cell].adjacent[val])
    }
    const low = Math.min(...vals)
    cells[cell].low = low
    const lowAdjacent = Object.entries(cells[cell].adjacent)
      .filter(a => a[1] === low)
      .map(m => m[0])
    cells[cell].lowAdjacent = lowAdjacent
  }

  return cells
}
export const parseDataToGraph = (inputData: string[], rows?: number) => {
  const data = inputData.slice(0, rows).map(d => d.split('').map(d => Number(d)))

  const graph: Graph = { '0,0': {} }

  data.forEach((row, y) => {
    row.forEach((_, x) => {
      graph[`${y},${x}`] = {}
      adjacentConfig.forEach(({ yOffset, xOffset }) => {
        const val = data[yOffset + y]?.[xOffset + x]
        if (val && `${yOffset + y},${xOffset + x}` !== '0,0') {
          graph[`${y},${x}`][`${yOffset + y},${xOffset + x}`] = val
        }
      })
    })
  })

  return graph
}

export function* adjacent(length: number, y: number, x: number): Iterable<[number, number]> {
  if (y > 0) {
    yield [y - 1, x]
  }
  if (y < length - 1) {
    yield [y + 1, x]
  }
  if (x > 0) {
    yield [y, x - 1]
  }
  if (x < length - 1) {
    yield [y, x + 1]
  }
}

export const getPath = (length: number, graphFn: (y: number, x: number) => number): number => {
  const dist = []
  const processed = []

  for (let y = 0; y < length; ++y) {
    const processed_row = []
    const dist_row = []
    for (let x = 0; x < length; ++x) {
      processed_row[x] = 1
      dist_row[x] = Infinity
    }
    processed.push(processed_row)
    dist.push(dist_row)
  }

  dist[0][0] = 0
  processed[0][0] = 2

  const queue = [[0, 0]]

  while (queue.length > 0) {
    let distMin = Infinity
    let distMinIndex = 0
    for (let i = 0; i < queue.length; ++i) {
      const [yy, xx] = queue[i]
      if (dist[yy][xx] < distMin) {
        distMin = dist[yy][xx]
        distMinIndex = i
      }
    }

    const [y, x] = queue[distMinIndex]

    queue[distMinIndex] = queue[queue.length - 1]

    queue.length--

    processed[y][x] = 3

    for (const [yy, xx] of adjacent(length, y, x)) {
      if (processed[yy][xx] === 3) continue
      dist[yy][xx] = Math.min(dist[yy][xx], dist[y][x] + graphFn(yy, xx))
      if (processed[yy][xx] === 1) {
        processed[yy][xx] = 2
        queue.push([yy, xx])
      }
    }
  }
  return dist[length - 1][length - 1]
}
