import { ConnectionDetails } from '../types'

export const parseInput = (inputData: string[]): ConnectionDetails =>
  inputData.reduce((acc, item) => {
    const [key, connected] = item.split('-')

    if (!acc[connected]) acc[connected] = []
    if (!acc[key]) acc[key] = []

    if (!acc[connected].includes(key)) acc[connected].push(key)
    if (!acc[key].includes(connected)) acc[key].push(connected)

    return acc
  }, {} as ConnectionDetails)

export const isMajor = (id: string): boolean => {
  return id.toUpperCase() === id ? true : false
}
export const isMidPath = (id: string): boolean => {
  return id !== 'start' && id !== 'end'
}

export const STARTING_NODE = 'start'
export const ENDING_NODE = 'end'

export const getNextPath = (
  cave: string,
  path: string[],
  allPaths: string[][],
  minor: boolean,
  connections: ConnectionDetails,
): void => {
  let newPath = [...path, cave]

  if (cave === ENDING_NODE) {
    allPaths.push(newPath)
    return
  }

  connections[cave].forEach(c => {
    if (isMajor(c) || !newPath.includes(c)) {
      getNextPath(c, newPath, allPaths, minor, connections)
    } else if (minor && isMidPath(c)) {
      getNextPath(c, newPath, allPaths, false, connections)
    }
  })
}
