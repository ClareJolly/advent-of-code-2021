import { splitStringArrToNumbers } from '../../helpers'
import { ADJACENT_CONFIG } from '../helpers'

const part1 = (inputData: string[]) => {
  const testInputData = ['11111', '19991', '19191', '19991', '11111']
  //   const data = splitStringArrToNumbers(testInputData)
  const data = splitStringArrToNumbers(inputData)
  //   console.log('🚀 ~ file: index.ts ~ line 5 ~ part1 ~ data', data)

  let newData: number[][] = [...data]

  const incrementAdjacent = (
    y: number,
    x: number,
    flashes: string[],
    newData: number[][],
  ): void => {
    ADJACENT_CONFIG.forEach(([yAdj, xAdj]) => {
      if (!flashes.includes(`${y + yAdj},${x + xAdj}`) && newData[y + yAdj]?.[x + xAdj])
        newData[y + yAdj][x + xAdj]++
    })
  }

  let totalFlashes = 0
  let step = 0

  for (step; step < 2; step++) {
    let flashes: string[] = []
    newData = newData.map(row => row.map(c => c + 1))
    newData.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell > 9) {
          flashes.push(`${y},${x}`)

          incrementAdjacent(y, x, flashes, newData)
        }
      })
    })
    newData.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell > 9) {
          flashes.push(`${y},${x}`)
          //   data[y][x] = 0
        }
      })
    })
    newData.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell > 9) {
          flashes.push(`${y},${x}`)
          //   data[y][x] = 0
        }
      })
    })

    const UniqueFlashes = [...new Set(flashes)]
    console.log('🚀 ~ file: index.ts ~ line 60 ~ part1 ~ flashes', UniqueFlashes)
    totalFlashes += UniqueFlashes.length

    UniqueFlashes.forEach(f => (newData[Number(f.split(',')[0])][Number(f.split(',')[1])] = 0))
    console.log('🚀 ~ file: index.ts ~ line 57 ~ data.forEach ~ newData', newData)
  }
  return totalFlashes
}

export default part1
