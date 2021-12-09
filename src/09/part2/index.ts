import { splitStringArrToNumbers } from '../../helpers'
import { adjacentConfig, getLowestPoints } from '../helpers'

const findBasin = (data: number[][], loopBasin: number[][], basin: string[]) => {
  loopBasin.forEach(([y, x]) => {
    adjacentConfig.forEach(({ yOffset, xOffset }) => {
      let val = data[yOffset + y]?.[xOffset + x]

      if (val > data[y][x] && val !== 9) {
        const newCoOrds = [yOffset + y, xOffset + x]

        loopBasin.push(newCoOrds)
        basin.push(`${yOffset + y},${xOffset + x}S`)

        findBasin(data, [newCoOrds], basin)
      }
    })
  })
}

const processLowPoint = (data: number[][], y: number, x: number) => {
  const basin: string[] = [`${y},${x}`]
  const loopBasin: number[][] = [[y, x]]

  findBasin(data, loopBasin, basin)

  return [...new Set(basin)].length
}

const part2 = (inputData: string[]) => {
  const data = splitStringArrToNumbers(inputData)

  const { lowCoOrds } = getLowestPoints(data)

  const basinSizes = lowCoOrds.map(([a, b]) => processLowPoint(data, a, b))

  const sorted = basinSizes.sort((a, b) => b - a)

  return sorted.slice(0, 3).reduce((acc, item) => acc * item, 1)
}

export default part2
