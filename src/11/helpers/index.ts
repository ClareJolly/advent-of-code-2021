export const ADJACENT_CONFIG: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
]

export const checkIsSync = (data: number[][]): boolean => {
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      if (data[y][x] !== 0) {
        return false
      }
    }
  }

  return true
}

export const reset = (data: number[][]): void => {
  data.forEach((row, y) => {
    row.forEach((_, x) => {
      if (data[y][x] > 9) {
        data[y][x] = 0
      }
    })
  })
}

export const flash = (flashes: number[][], data: number[][]): number => {
  let flashesCount = 0
  while (flashes.length > 0) {
    const [y, x] = flashes.pop()!
    if (data[y][x] === 10) {
      flashesCount++

      ADJACENT_CONFIG.forEach(([yAdj, xAdj]) => {
        if (data[y + yAdj] && data[y + yAdj][x + xAdj] && data[y + yAdj][x + xAdj] <= 9) {
          data[y + yAdj][x + xAdj]++

          if (data[y + yAdj][x + xAdj] === 10) {
            flashes.push([y + yAdj, x + xAdj])
          }
        }
      })
    }
  }

  return flashesCount
}

export const incrementEnergy = (data: number[][]): number[][] => {
  const flashes: number[][] = []
  data.forEach((row, y) => {
    row.forEach((_, x) => {
      data[y][x]++
      if (data[y][x] > 9) {
        flashes.push([y, x])
      }
    })
  })

  return flashes
}

export const processStep = (data: number[][]): number => {
  const flashes = incrementEnergy(data)
  const flashesCount = flash(flashes, data)
  reset(data)

  return flashesCount
}
