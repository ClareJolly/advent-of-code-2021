interface PlayerSetup {
  [key: string]: {
    start: number
    currentPosition: number
    score: number
  }
}

const incrementDie = (currentDie: number): number => (currentDie === 100 ? 1 : currentDie + 1)

const getNewPosition = (currentPosition, currentDie) => {
  const updated = currentPosition + currentDie
  return updated > 10 ? updated % 10 : updated
}

const getScores = (data: PlayerSetup) => {
  return Object.values(data).map(d => d.score)
}

const part1 = (inputData: string[]) => {
  const data = inputData.reduce((acc, item) => {
    const [_, player, start] = item.match(/Player (\d+) .*: (\d+)/)!
    acc[player!] = { start: Number(start), currentPosition: Number(start), score: 0 }
    return acc
  }, {} as PlayerSetup)

  let rolls = 0
  let currentDie = 1
  while (Object.values(data).every(({ score }) => score < 1000)) {
    for (let player in data) {
      if (Object.values(data).every(({ score }) => score < 1000)) {
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
  console.log('🚀 ~ file: index.ts ~ line 35 ~ part1 ~ rolls', rolls)
  console.log('🚀 ~ file: index.ts ~ line 6 ~ part1 ~ data', data)

  return rolls * Math.min(...getScores(data))
}

export default part1
