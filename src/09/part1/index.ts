import { splitStringArrToNumbers } from '../../helpers'

const adjacentConfig = [
  (data: number[][], y: number, x: number) => data[y - 1]?.[x],
  (data: number[][], y: number, x: number) => data[y + 1]?.[x],
  (data: number[][], y: number, x: number) => data[y][x - 1],
  (data: number[][], y: number, x: number) => data[y][x + 1],
]

const part1 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  let lowCoOrds: string[] = []
  let lowPoints: number[] = []

  data.forEach((d, i) => {
    d.forEach((n, ind) => {
      let isLow = false

      const adjacent: number[] = []

      adjacentConfig.forEach(a => {
        const val = a(data, i, ind)
        if (val || val === 0) adjacent.push(val)
      })

      const lowest = Math.min(...adjacent)
      isLow = n < lowest
      if (isLow) {
        lowCoOrds.push(`${i},${ind}`)
        lowPoints.push(n)
      }
    })
  })

  return lowPoints.reduce((acc, item) => acc + item + 1, 0)
}

export default part1
