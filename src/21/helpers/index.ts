import { PlayerSetup } from '../types'

export const parsePlayers = (inputData: string[]): PlayerSetup => {
  return inputData.reduce((acc, item) => {
    const [_, player, start] = item.match(/Player (\d+) .*: (\d+)/)!
    acc[player!] = { start: Number(start), currentPosition: Number(start), score: 0 }
    return acc
  }, {} as PlayerSetup)
}
