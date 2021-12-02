import { DirConfig } from '../types'

export const dirConfig: DirConfig = {
  down: { axis: 'y', multi: 1, aimMulti: (aim: number, num: number): number => aim + num },
  up: { axis: 'y', multi: -1, aimMulti: (aim: number, num: number): number => aim - num },
  forward: { axis: 'x', multi: 1, aimMulti: (aim: number, num: number): number => aim + num },
}

export const formatData = (inputData: string[]): [string, number][] => {
  const one = inputData.map(d => d.split(' '))
  const two = one.map(([dir, dist]) => {
    const test = [dir, Number(dist)] as [string, number]
    return test
  })
  return two
}
