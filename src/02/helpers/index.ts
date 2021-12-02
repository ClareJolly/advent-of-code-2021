import { DirConfig } from '../types'

export const dirConfig: DirConfig = {
  down: { axis: 'y', multi: 1, aimCalc: ({ aim, num }) => aim + num },
  up: { axis: 'y', multi: -1, aimCalc: ({ aim, num }) => aim - num },
  forward: { axis: 'x', multi: 1, aimCalc: ({ aim }) => aim },
}

export const formatData = (inputData: string[]): [string, number][] => {
  return inputData
    .map(d =>
      d.split(' ').map((t, i) => {
        return i === 1 ? Number(t) : t
      }),
    )
    .map(([dir, dist]) => {
      const test = [dir, Number(dist)] as [string, number]
      return test
    })
}
