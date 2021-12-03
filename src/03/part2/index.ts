import { transposeArray } from '../helpers'

const getFrequency = (data: number[][]) => {
  const frequency = transposeArray(data)

  return frequency.map(f => {
    return f.reduce((acc, item) => {
      acc[item] = (acc[item] ?? 0) + 1
      return acc
    }, {} as { [key: string]: number })
  })
}

const part2 = (inputData: string[]) => {
  const data = inputData.map(d => d.split('').map(d => Number(d)))

  const frequency = getFrequency(data)

  let oxy: number[][] = data
  let i = 0
  while (i < frequency.length && oxy.length > 1) {
    const newFrequency = getFrequency(oxy)
    const oxygenBinary = newFrequency.map(f => {
      if (f[0] === f[1]) return 1
      return f[0] > f[1] ? 0 : 1
    })
    oxy = oxy.filter(d => d[i] === oxygenBinary[i])
    i++
  }

  let co2: number[][] = data
  let c = 0
  while (c < frequency.length && co2.length > 1) {
    const newFrequency = getFrequency(co2)
    const co2Binary = newFrequency.map(f => {
      if (f[0] === f[1]) return 0
      return f[0] < f[1] ? 0 : 1
    })
    co2 = co2.filter(d => d[c] === co2Binary[c])
    c++
  }

  //   const oxygenBinary = frequency.map(f => {
  //     if (f[0] === f[1]) return 1
  //     return f[0] > f[1] ? 0 : 1
  //   })
  //   // .join('')
  //   console.log('🚀 ~ file: index.ts ~ line 21 ~ part2 ~ oxygenBinary', oxygenBinary)
  //   const oxygenData = data
  //     .filter(d => d[0] === oxygenBinary[0])
  //     .filter(d => d[1] === oxygenBinary[1])
  //     .filter(d => d[2] === oxygenBinary[2])
  //     .filter(d => d[3] === oxygenBinary[3])
  //     .filter(d => d[4] === oxygenBinary[4])
  //   console.log('🚀 ~ file: index.ts ~ line 23 ~ part2 ~ oxygenData', oxygenData)

  //   const co2Binary = frequency.map(f => {
  //     if (f[0] === f[1]) return 0
  //     return f[0] < f[1] ? 0 : 1
  //   })
  //   // .join('')
  //   console.log('🚀 ~ file: index.ts ~ line 29 ~ part2 ~ co2Binary', co2Binary)

  const oxygenDecimal = parseInt(oxy[0].join(''), 2)
  const co2Decimal = parseInt(co2[0].join(''), 2)

  return co2Decimal * oxygenDecimal
}

export default part2
