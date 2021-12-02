import { dirConfig, formatData } from '../helpers'
import { Position } from '../types'

const part1 = (inputData: string[]) => {
  const data = formatData(inputData)

  const position: Position = { x: 0, y: 0 }

  data.forEach(([dir, num]) => {
    const { axis, multi } = dirConfig[dir]

    position[axis] = position[axis] + num * multi
  })
  return position['x'] * position['y']
}

export default part1
