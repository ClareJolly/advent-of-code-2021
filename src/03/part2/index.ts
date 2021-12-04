import { getFrequency } from '../helpers'

const oxygenCalc = (f: { [key: string]: number }) => {
  if (f[0] === f[1]) return 1
  return f[0] > f[1] ? 0 : 1
}

const co2Calc = (f: { [key: string]: number }) => {
  if (f[0] === f[1]) return 0
  return f[0] < f[1] ? 0 : 1
}

const getBinary = (
  data: number[][],
  frequency: {
    [key: string]: number
  }[],
  calcFunction: (f: { [key: string]: number }) => number,
) => {
  let output: number[][] = data
  let i = 0
  while (i < frequency.length && output.length > 1) {
    const newFrequency = getFrequency(output)
    const binary = newFrequency.map(f => {
      return calcFunction(f)
    })
    output = output.filter(d => d[i] === binary[i])
    i++
  }

  return output
}

const part2 = (inputData: string[]) => {
  const data = inputData.map(d => d.split('').map(d => Number(d)))

  const frequency = getFrequency(data)

  const oxy = getBinary(data, frequency, oxygenCalc)
  const co2 = getBinary(data, frequency, co2Calc)

  const oxygenDecimal = parseInt(oxy[0].join(''), 2)
  const co2Decimal = parseInt(co2[0].join(''), 2)

  return co2Decimal * oxygenDecimal
}

export default part2
