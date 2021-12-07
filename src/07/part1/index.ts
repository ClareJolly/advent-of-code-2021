const part1 = (inputData: string[]) => {
  const data = inputData[0].split(',').map(d => Number(d))

  let positions = []
  for (let i = 0; i < data.length; i++) {
    const diff = data.reduce((acc, item) => {
      return acc + Math.abs(item - i)
    }, 0)
    positions.push(diff)
  }
  return Math.min(...positions)
}

export default part1
