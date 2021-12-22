import { DICE_MAP, DIE_CONFIG, MAX_OUTCOMES, MIN_OUTCOMES, parsePlayers } from '../helpers'
import { PlayerSetup } from '../types'

const playGame = (data: PlayerSetup, turn: number = 1) => {
  const player = data[turn]

  if (data['1'].score >= DIE_CONFIG['dirac'].winningScore) return 1
  if (data['2'].score >= DIE_CONFIG['dirac'].winningScore) return 0

  let sum = 0

  for (let outcome = MIN_OUTCOMES; outcome <= MAX_OUTCOMES; outcome++) {
    const previousPosition = player.currentPosition
    const previousScore = player.score

    player.currentPosition = ((player.currentPosition - 1 + outcome) % 10) + 1
    player.score += player.currentPosition

    const nextTurn = turn === 1 ? 2 : 1

    sum += DICE_MAP[outcome] * playGame(data, nextTurn)

    player.currentPosition = previousPosition
    player.score = previousScore
  }

  return sum
}

const part2 = (inputData: string[]) => {
  const data = parsePlayers(inputData)

  return playGame(data)
}

export default part2
