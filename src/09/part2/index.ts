import { splitStringArrToNumbers } from '../../helpers'
import { adjacentConfig, getLowestPoints } from '../helpers'

const findBasin = (data: number[][], loopBasin: number[][], basin: string[]) => {
  loopBasin.forEach(([yy, xx]) => {
    adjacentConfig.forEach(({ y, x }) => {
      let val = data[y + yy]?.[x + xx]

      if (val > data[yy][xx] && val !== 9) {
        const newCoOrds = [y + yy, x + xx]

        loopBasin.push(newCoOrds)
        basin.push(`${y + yy},${x + xx}S`)

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
