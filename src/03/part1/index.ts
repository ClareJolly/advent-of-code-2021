const part1 = (inputData: string[]) => {
  const data = inputData.map(d => d.split('').map(d => Number(d)))

  const length = inputData[0].length

  const frequency: number[][] = []

  data.forEach((d, i) => {
    for (let x = 0; x < length; x++) {
      if (!frequency[x]) frequency[x] = []
      frequency[x].push(d[x])
    }
  })

  const result: { [key: string]: number } = {}

  const finalFreq = frequency.map(f => {
    return f.reduce((acc, curr) => {
      acc[curr] = (acc[curr] ?? 0) + 1
      if (acc[curr] >= 3) {
        result[curr] = acc[curr]
      }
      return acc
    }, {} as { [key: string]: number })
  })

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
