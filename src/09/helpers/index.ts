export const adjacentConfig = [
  { yOffset: -1, xOffset: 0 },
  { yOffset: 1, xOffset: 0 },
  { yOffset: 0, xOffset: -1 },
  { yOffset: 0, xOffset: 1 },
]

interface LowestPointDetails {
  lowCoOrds: number[][]
  lowPoints: number[]
}

export const getLowestPoints = (data: number[][]): LowestPointDetails => {
  let lowCoOrds: number[][] = []
  let lowPoints: number[] = []

  data.forEach((row, y) => {
    row.forEach((cell, x) => {
      const adjacent: number[] = []

      adjacentConfig.forEach(({ yOffset, xOffset }) => {
        const val = data[yOffset + y]?.[xOffset + x]
        if (val || val === 0) adjacent.push(val)
      })

      if (cell < Math.min(...adjacent)) {
        lowCoOrds.push([y, x])
        lowPoints.push(cell)
      }
    })
  })

  return {
    lowCoOrds,
    lowPoints,
  }
}
