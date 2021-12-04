import { getFrequency } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = inputData.map(d => d.split('').map(d => Number(d)))

  const finalFreq = getFrequency(data)

  const gammaBinary = finalFreq
    .map(f => {
      return f[0] > f[1] ? 0 : 1
    })
    .join('')

  const epsilonBinary = finalFreq
    .map(f => {
      return f[0] < f[1] ? 0 : 1
    })
    .join('')

  const gammaDecimal = parseInt(gammaBinary, 2)
  const epsilonDecimal = parseInt(epsilonBinary, 2)

  return epsilonDecimal * gammaDecimal
}

export default part1
