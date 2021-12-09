import { splitStringArrToNumbers } from '../../helpers'

const adjacentConfig = [
  { y: -1, x: 0 },
  { y: 1, x: 0 },
  { y: 0, x: -1 },
  { y: 0, x: 1 },
]

const recur = (data: number[][], loopBasin: number[][], basin: string[]) => {
  loopBasin.forEach(([a, b]) => {
    adjacentConfig.forEach(({ y, x }) => {
      let val = data[y + a]?.[x + b]
      if (val > data[a][b] && val !== 9) {
        loopBasin.push([y + a, x + b])
        basin.push(`${y + a},${x + b}S`)
        recur(data, [[y + a, x + b]], basin)
      }
    })
  })
}

const processLoop = (data: number[][], a: number, b: number) => {
  const basin: string[] = [`${a},${b}`]
  const loopBasin: number[][] = [[a, b]]
  recur(data, loopBasin, basin)
  const deduped = [...new Set(basin)]
  return deduped.length
}

const part2 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  let lowCoOrds: number[][] = []
  let lowPoints: number[] = []

  data.forEach((d, i) => {
    d.forEach((n, ind) => {
      const adjacent: number[] = []

      adjacentConfig.forEach(({ y, x }) => {
        const val = data[y + i]?.[x + ind]
        if (val || val === 0) adjacent.push(val)
      })

      const lowest = Math.min(...adjacent)
      if (n < lowest) {
        lowCoOrds.push([i, ind])
        lowPoints.push(n)
      }
    })
  })

  const sizes = lowCoOrds.map(([a, b]) => {
    return processLoop(data, a, b)
  })

  const sorted = sizes.sort((a, b) => b - a)

  return sorted.slice(0, 3).reduce((acc, item) => acc * item, 1)
}

export default part2
