import { batchByBlankLines } from '../../helpers'

export const formatBatches = (data: string[]): number[][][] => {
  const batches = batchByBlankLines(data)

  return batches.map(batch => {
    return batch.map(b => {
      return b
        .split(' ')
        .filter(b => b)
        .map(b => Number(b))
    })
  })
}

export const setupData = (inputData: string[]) => {
  const data = [...inputData]
  const bingoCall = data.splice(0, 1)[0]
  data.splice(0, 1)

  const numbers = bingoCall.split(',').map(n => Number(n))

  return { data, numbers }
}

export const calculateScore = (board: number[][], number: number): number => {
  const sum = board.reduce((acc, item) => {
    item.forEach(i => {
      if (i !== -1) acc += i
    })
    return acc
  }, 0)
  return sum * number
}
