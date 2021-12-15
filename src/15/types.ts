export interface CellDetails {
  adjacent: { [key: string]: number }
  low?: number
  lowAdjacent?: string[]
}
export interface Cells {
  [key: string]: CellDetails
}

export interface Graph {
  [key: string]: { [key: string]: number }
}
