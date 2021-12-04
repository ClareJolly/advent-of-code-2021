import { batchByBlankLines } from '../../helpers'
import { WinDetailsPart2 } from '../types'

const part2 = (inputData: string[]) => {
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

  const wins: WinDetailsPart2[] = []
  let x = 0
  while (wins.length < formattedBatches.length) {
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
          if (!wins.filter(w => w.board === batchIndex).length) {
            wins.push({
              board: batchIndex,
              row: rowIndex,
              number: n,
              fullBoard: [...formattedBatches[batchIndex]],
            })
          }
        }
        r.forEach((r, i) => {
          if (!columns[i]) columns[i] = []
          columns[i].push(r)
        })
      })

      columns.forEach((c, columnIndex) => {
        if (c.every(c => c === -1)) {
          if (!wins.filter(w => w.board === batchIndex).length) {
            wins.push({
              board: batchIndex,
              column: columnIndex,
              number: n,
              fullBoard: [...formattedBatches[batchIndex]],
            })
          }
        }
      })
    })
    x++
  }

  const lastWin = wins[wins.length - 1]
  const sum = lastWin.fullBoard!.reduce((acc, item) => {
    item.forEach(i => {
      if (i !== -1) acc += i
    })
    return acc
  }, 0)
  return sum * lastWin.number!
}

export default part2
