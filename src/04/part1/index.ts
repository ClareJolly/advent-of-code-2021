import { batchByBlankLines } from '../../helpers'
import { WinDetails } from '../types'

const part1 = (inputData: string[]) => {
  const data = [...inputData]
  const bingoCall = data.splice(0, 1)[0]
  data.splice(0, 1)

  const numbers = bingoCall.split(',').map(n => Number(n))

  const batches = batchByBlankLines(data)

  const formattedBatches = batches.map(batch => {
    return batch.map(b => {
      return b
        .split(' ')
        .filter(b => b)
        .map(b => Number(b))
    })
  })

  const win: WinDetails = {
    board: undefined,
    row: undefined,
    column: undefined,
    number: undefined,
  }
  let x = 0
  while (!win.board) {
    const n = numbers[x]
    const coOrds: number[][] = []
    formattedBatches.forEach((b, batchIndex) => {
      b.forEach((r, rowIndex) => {
        if (r.indexOf(n) > -1) {
          coOrds.push([batchIndex, rowIndex, r.indexOf(n)])
        }
      })
    })
    coOrds.forEach(([a, b, c]) => {
      formattedBatches[a][b][c] = -1
    })

    formattedBatches.forEach((b, batchIndex) => {
      const columns: number[][] = []
      b.forEach((r, rowIndex) => {
        if (r.every(r => r === -1)) {
          win.board = batchIndex
          win.row = rowIndex
          win.number = n
        }
        r.forEach((r, i) => {
          if (!columns[i]) columns[i] = []
          columns[i].push(r)
        })
      })

      columns.forEach((c, columnIndex) => {
        if (c.every(c => c === -1)) {
          win.board = batchIndex
          win.column = columnIndex
          win.number = n
        }
      })
    })
    x++
  }

  const sum = formattedBatches[win.board].reduce((acc, item) => {
    item.forEach(i => {
      if (i !== -1) acc += i
    })
    return acc
  }, 0)
  return sum * win.number!
}

export default part1
