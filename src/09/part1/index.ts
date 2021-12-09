import { splitStringArrToNumbers } from '../../helpers'

// const adjacentConfig = [
//   (data: number[][], y: number, x: number) => data[y - 1]?.[x],
//   (data: number[][], y: number, x: number) => data[y + 1]?.[x],
//   (data: number[][], y: number, x: number) => data[y][x - 1],
//   (data: number[][], y: number, x: number) => data[y][x + 1],
// ]
const adjacentConfig = [
  { y: -1, x: 0 }, // (data: number[][], y: number, x: number) => data[y - 1]?.[x],
  { y: 1, x: 0 }, //(data: number[][], y: number, x: number) => data[y + 1]?.[x],
  { y: 0, x: -1 }, //(data: number[][], y: number, x: number) => data[y][x - 1],
  { y: 0, x: 1 }, //(data: number[][], y: number, x: number) => data[y][x + 1],
]
const part1 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  let lowCoOrds: string[] = []
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
        lowCoOrds.push(`${i},${ind}`)
        lowPoints.push(n)
      }
    })
  })

  return lowPoints.reduce((acc, item) => acc + item + 1, 0)
}

export default part1
