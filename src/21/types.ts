export interface Player {
  start: number
  currentPosition: number
  score: number
}

export interface PlayerSetup {
  [key: string]: Player
}

export interface DieConfig {
  [key: string]: { sides: number; increment: (curr: number) => number; winningScore: number }
}
