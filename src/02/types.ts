export interface Position {
  x: number
  y: number
}

export type Axis = 'x' | 'y'

interface DirConfigDetail {
  axis: Axis
  multi: number
  aimMulti: (aim: number, num: number) => number
}

export interface DirConfig {
  [key: string]: DirConfigDetail
}
