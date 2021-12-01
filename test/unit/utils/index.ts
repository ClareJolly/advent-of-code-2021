import { fileToArray } from '../../../src/helpers'
import path from 'path'

export const getDataForTest = (src: string) => {
  const testData = fileToArray(path.join(src, '../data/testData.txt'))
  const realData = fileToArray(path.join(src, '../data/input.txt'))

  return { testData, realData }
}
