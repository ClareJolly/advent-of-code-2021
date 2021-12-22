import { DieConfig, PlayerSetup } from '../types'

export const DIE_CONFIG: DieConfig = {
  standard: { sides: 100, increment: curr => curr + 1, winningScore: 1000 },
  dirac: { sides: 3, increment: curr => curr + 1, winningScore: 21 },
}

export const DICE_MAP: { [key: string]: number } = {}
for (let diceOne = 1; diceOne <= 3; diceOne++) {
  for (let diceTwo = 1; diceTwo <= 3; diceTwo++) {
    for (let diceThree = 1; diceThree <= 3; diceThree++) {
      let outcome = diceOne + diceTwo + diceThree
      if (!DICE_MAP.hasOwnProperty(outcome)) DICE_MAP[outcome] = 0
      DICE_MAP[outcome]++
    }
  }
}
export const OUTCOMES = Object.keys(DICE_MAP).map(Number)
export const MAX_OUTCOMES = Math.max(...OUTCOMES)
export const MIN_OUTCOMES = Math.min(...OUTCOMES)

export const parsePlayers = (inputData: string[]): PlayerSetup => {
  return inputData.reduce((acc, item) => {
    const [_, player, start] = item.match(/Player (\d+) .*: (\d+)/)!
    acc[player!] = { start: Number(start), currentPosition: Number(start), score: 0 }
    return acc
  }, {} as PlayerSetup)
}

export const getScores = (data: PlayerSetup) => {
  return Object.values(data).map(d => d.score)
}

export const checkMaxScore = (data: PlayerSetup, winningScore: number = 1000): boolean =>
  Object.values(data).every(({ score }) => score < winningScore)

export const incrementDie = (currentDie: number, die: string = 'standard'): number =>
  currentDie === DIE_CONFIG[die].sides ? 1 : DIE_CONFIG[die].increment(currentDie)
