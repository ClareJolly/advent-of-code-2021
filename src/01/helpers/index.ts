const multiplyArrayItems = ({ arr, expectedLength }: { arr: number[]; expectedLength: number }) => {
  if (arr.length === expectedLength) {
    const total = arr.reduce((acc, item) => {
      return acc * item
    }, 1)

    return total
  }
  return undefined
}

const filteringList = (arr: number[], lookup: number) => {
  return arr.filter(item => {
    return arr.includes(lookup - item)
  })
}

const constants = {
  SUMTOTAL: 2020,
}

export { multiplyArrayItems, filteringList, constants }
