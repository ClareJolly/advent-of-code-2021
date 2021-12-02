interface DirConfig {
  [key: string]: { axis: Axis; multi: number }
}

interface Position {
  x: number
  y: number
}

type Axis = 'x' | 'y'

const part1 = (inputData: string[]) => {
  const data: (string | number)[][] = inputData
    .map(d => d.split(' '))
    .map(([dir, dist]) => [dir, Number(dist)])

  const position: Position = { x: 0, y: 0 }

  const dirConfig: DirConfig = {
    down: { axis: 'y', multi: 1 },
    up: { axis: 'y', multi: -1 },
    forward: { axis: 'x', multi: 1 },
  }

  data.forEach(([dir, num]) => {
    const { axis, multi } = dirConfig[dir as string]

    position[axis] = position[axis] + (num as number) * multi
  })
  return position['x'] * position['y']
}

export default part1
