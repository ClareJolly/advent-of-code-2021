import { dirConfig, formatData } from '../helpers'
import { Position } from '../types'

const part2 = (inputData: string[]) => {
  const data = formatData(inputData)

  const position: Position = { x: 0, y: 0 }
  let aim = 0

  data.forEach(([dir, num]) => {
    const { aimCalc } = dirConfig[dir as string]

    if (dir !== 'forward') aim = aimCalc({ aim, num })
    if (dir === 'forward') {
      position.x = position.x + num
      position.y = position.y + num * aim
    }
  })
  return position['x'] * position['y']
}

export default part2
