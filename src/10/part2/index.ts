import { pairsAndPoints, getCorrespondingBracket } from '../helpers'

const getBracketPoints = (bracket: string) => {
  const [_, __, ___, point] = pairsAndPoints.find(([o]) => bracket === o)!

  return point
}

const isOpenBracket = (bracket: string) => ['(', '{', '<', '['].some(c => c === bracket)

const isCorruptLine = (line: string[]) => {
  const previous = []
  let isCorruptLine = false
  let i = 0

  while (!isCorruptLine && i < line.length - 1) {
    if (isOpenBracket(line[i])) {
      previous.push(line[i])
    } else {
      if (previous[previous.length - 1] === getCorrespondingBracket(line[i], 1)) {
        previous.pop()
      } else {
        isCorruptLine = true
      }
    }

    i++
  }

  return isCorruptLine
}

const calculateScore = (line: string[]) => {
  const previous = []
  let i = 0

  while (i < line.length) {
    if (isOpenBracket(line[i])) {
      previous.push(line[i])
    } else {
      if (previous[previous.length - 1] === getCorrespondingBracket(line[i], 1)) previous.pop()
    }

    i++
  }

  return previous
    .map(s => getCorrespondingBracket(s, 0))
    .reverse()
    .reduce((acc, item) => {
      return (acc = acc * 5 + getBracketPoints(item))
    }, 0)
}

const part2 = (inputData: string[]) => {
  const data = inputData.map(d => d.split(''))

  const noCorrupted = data.filter(d => !isCorruptLine(d))
  const sortedScores = noCorrupted.map(calculateScore).sort((a, b) => a - b)

  return sortedScores[(sortedScores.length - 1) / 2]
}

export default part2
