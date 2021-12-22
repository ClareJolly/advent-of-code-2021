import { parsePlayers } from '../helpers'
import { PlayerSetup } from '../types'

const incrementDie = (currentDie: number): number => (currentDie === 100 ? 1 : currentDie + 1)

const getNewPosition = (currentPosition: number, currentDie: number) => {
  const updated = currentPosition + currentDie
  return updated > 10 ? updated % 10 : updated
}

const getScores = (data: PlayerSetup) => {
  return Object.values(data).map(d => d.score)
}

const checkMaxScore = (data: PlayerSetup, winningScore: number = 1000): boolean =>
  Object.values(data).every(({ score }) => score < winningScore)

const part1 = (inputData: string[]) => {
  const data = parsePlayers(inputData)

  let rolls = 0
  let currentDie = 1
  while (checkMaxScore(data)) {
    for (let player in data) {
      if (checkMaxScore(data)) {
        data[player].currentPosition = getNewPosition(data[player].currentPosition, currentDie)
        currentDie = incrementDie(currentDie)
        data[player].currentPosition = getNewPosition(data[player].currentPosition, currentDie)
        currentDie = incrementDie(currentDie)
        data[player].currentPosition = getNewPosition(data[player].currentPosition, currentDie)
        currentDie = incrementDie(currentDie)
        rolls += 3
        data[player].score += data[player].currentPosition % 10 || 10
      }
    }
  }

  return rolls * Math.min(...getScores(data))
}

export default part1
