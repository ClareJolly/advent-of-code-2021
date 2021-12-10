export const pairsAndPoints: [string, string, number, number][] = [
  ['(', ')', 3, 1],
  ['[', ']', 57, 2],
  ['{', '}', 1197, 3],
  ['<', '>', 25137, 4],
]

export const getCorrespondingBracket = (bracket: string, index: number): string =>
  pairsAndPoints.find(p => bracket === p[index])![0]
