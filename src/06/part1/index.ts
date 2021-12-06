const part1 = (inputData: string[], days: number = 80) => {
  const data: number[] = inputData[0].split(',').map(d => Number(d))

  let data2: number[] = [...data]
  let day = 0
  const processNextData = () => {
    day++

    data2.forEach((d, i) => {
      if (d === 0) {
        data2.push(8)

        data2[i] = 6
      } else {
        data2[i] = d - 1
      }
    })

    if (day < days) {
      processNextData()
    }
  }

  processNextData()

  return data2.length
}

export default part1
