import { calculateScore, formatBatches, getCoOrds, setupData } from '../helpers'
import { WinDetailsPart2 } from '../types'

const part2 = (inputData: string[]) => {
  const { data, numbers } = setupData(inputData)

  const formattedBatches = formatBatches(data)

  const wins: WinDetailsPart2[] = []

  let x = 0
  while (wins.length < formattedBatches.length) {
    const n = numbers[x]

    const coOrds = getCoOrds(formattedBatches, n)

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
  return calculateScore(lastWin.fullBoard!, lastWin.number!)
}

export default part2
