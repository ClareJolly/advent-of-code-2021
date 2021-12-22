import { checkMaxScore, getScores, incrementDie, parsePlayers } from '../helpers'

const getNewPosition = (currentPosition: number, currentDie: number) => {
  const updated = currentPosition + currentDie
  return updated > 10 ? updated % 10 : updated
}

const part1 = (inputData: string[]) => {
  const data = parsePlayers(inputData)

  let rolls = 0
  let currentDie = 1

  while (checkMaxScore(data)) {
    for (let player in data) {
      if (checkMaxScore(data)) {
        for (let i = 0; i < 3; i++) {
          data[player].currentPosition = getNewPosition(data[player].currentPosition, currentDie)
          currentDie = incrementDie(currentDie)
          rolls++
        }
        data[player].score += data[player].currentPosition % 10 || 10
      }
    }
  }

  return rolls * Math.min(...getScores(data))
}

export default part1
