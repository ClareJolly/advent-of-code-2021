export const adjacentConfig = [
  { y: -1, x: 0 },
  { y: 1, x: 0 },
  { y: 0, x: -1 },
  { y: 0, x: 1 },
]

export const getLowestPoints = (
  data: number[][],
): { lowCoOrds: number[][]; lowPoints: number[] } => {
  let lowCoOrds: number[][] = []
  let lowPoints: number[] = []

  data.forEach((d, i) => {
    d.forEach((n, ind) => {
      const adjacent: number[] = []

      adjacentConfig.forEach(({ y, x }) => {
        const val = data[y + i]?.[x + ind]
        if (val || val === 0) adjacent.push(val)
      })

      if (n < Math.min(...adjacent)) {
        lowCoOrds.push([i, ind])
        lowPoints.push(n)
      }
    })
  })

  return {
    lowCoOrds,
    lowPoints,
  }
}
