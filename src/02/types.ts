export interface Position {
  x: number
  y: number
}

export type Axis = 'x' | 'y'

export interface AimFuncParams {
  aim: number
  num: number
}

interface DirConfigDetail {
  axis: Axis
  multi: number
  aimCalc: (arg0: AimFuncParams) => number
}

export interface DirConfig {
  [key: string]: DirConfigDetail
}
