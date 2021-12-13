import { batchByBlankLines } from '../../helpers'

export const parseInput = (inputData: string[]) => {
  const [dotsInput, instructionsInput] = batchByBlankLines(inputData)

  const dots = dotsInput.map(d => d.split(',').map(d => Number(d)))
  // console.log('🚀 ~ file: index.ts ~ line 7 ~ part1 ~ dots', dots)

  const instructions = instructionsInput.map(i => {
    const a = i.split(' ')[2]
    const b = a.split('=')
    return {
      axis: b[0],
      num: Number(b[1]),
    }
  })

  return { dots, instructions }
}
