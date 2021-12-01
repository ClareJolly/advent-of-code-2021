const getIncreases = (data: number[]): number => {
  let increase = 0

  data.forEach((depth, i) => {
    if (i > 0) {
      if (depth > data[i - 1]) increase++
    }
  })
  return increase
}

export default getIncreases
