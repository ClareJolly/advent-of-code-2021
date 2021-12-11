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

export const incrementAdjacent = (
  y: number,
  x: number,
  flashes: string[],
  data: number[][],
): void => {
  ADJACENT_CONFIG.forEach(([yAdj, xAdj]) => {
    if (!flashes.includes(`${y + yAdj},${x + xAdj}`)) data[y + yAdj][x + xAdj]++
  })
  // if (!flashes.includes(`${y + 1},${x}`)) data[y + 1][x]++
  // if (!flashes.includes(`${y},${x - 1}`)) data[y][x - 1]++
  // if (!flashes.includes(`${y},${x + 1}`)) data[y][x + 1]++
  // if (!flashes.includes(`${y + 1},${x + 1}`)) data[y + 1][x + 1]++
  // if (!flashes.includes(`${y + 1},${x - 1}`)) data[y + 1][x - 1]++
  // if (!flashes.includes(`${y - 1},${x + 1}`)) data[y - 1][x + 1]++
  // if (!flashes.includes(`${y - 1},${x - 1}`)) data[y - 1][x - 1]++
}
