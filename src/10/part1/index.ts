import { getCorrespondingBracket, pairsAndPoints } from '../helpers'

const getBracketPoints = (bracket: string): number => {
  const [_, __, points] = pairsAndPoints.find(([_, c]) => bracket === c)!

  return points
}

const isOpen = (bracket: string) => ['(', '{', '<', '['].some(c => c === bracket)

const getCorruptedLines = (line: string[]): string[] => {
  const corruptedLines = []
  const previous: string[] = []
  let isCorrupt = false
  let i = 0

  while (!isCorrupt && i < line.length) {
    if (isOpen(line[i])) {
      // if an opening bracket, just add to previous list
      previous.push(line[i])
    } else {
      if (previous[previous.length - 1] === getCorrespondingBracket(line[i], 1)) {
        // if the latest entry on previous === the corresponding open bracket
        // remove the last entry from previous list
        previous.pop()
      } else {
        // closing bracket nesting is incorrect therefore corrupt
        isCorrupt = true
        corruptedLines.push(line[i])
      }
    }

    i++
  }

  return corruptedLines
}

const part1 = (inputData: string[]) => {
  const data = inputData.map(d => d.split(''))

  const corruptedBrackets = data.reduce((acc, item) => [...acc, ...getCorruptedLines(item)], [])

  return corruptedBrackets.reduce((acc, item) => (acc += getBracketPoints(item)), 0)
}

export default part1
