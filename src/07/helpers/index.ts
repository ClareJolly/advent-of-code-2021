export const getTotal = (data: number[], fn: (item: number, i: number) => number) => {
  let positions = []
  for (let i = 0; i < data.length; i++) {
    const diff = data.reduce((acc, item) => {
      return acc + fn(item, i)
    }, 0)
    positions.push(diff)
  }
  return Math.min(...positions)
}
