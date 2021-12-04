export interface WinDetails {
  board?: number
  row?: number
  column?: number
  number?: number
}

export interface WinDetailsPart2 extends WinDetails {
  fullBoard?: number[][]
}
