export const transposeArray = (data: number[][]) => {
  const length = data[0].length

  const frequency: number[][] = []

  data.forEach(d => {
    for (let x = 0; x < length; x++) {
      if (!frequency[x]) frequency[x] = []
      frequency[x].push(d[x])
    }
  })

  return frequency
}
