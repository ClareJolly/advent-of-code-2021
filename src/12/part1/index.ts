import { getNextPath, isMajor, parseInput, STARTING_NODE } from '../helpers'

const part1 = (inputData: string[]) => {
  const connections = parseInput(inputData)

  let routes: string[][] = []

  getNextPath(STARTING_NODE, [], routes, isMajor(STARTING_NODE), connections)
  return routes.length
}

export default part1
