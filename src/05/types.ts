export interface VentLines {
  x1: number
  y1: number
  x2: number
  y2: number
}

export type Direction = 'diagonal' | 'vertical' | 'horizontal'

export interface Directions {
  direction: Direction
  high?: number
  low?: number
  angle?: { WE?: string; NS?: string }
  xIncrementMultiplier: number
  yIncrementMultiplier: number
}

export type Grid = number[][]
