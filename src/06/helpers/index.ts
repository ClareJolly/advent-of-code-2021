export const getResult = (input: string[], days: number = 80) => {
  const data: number[] = input[0].split(',').map(d => Number(d))

  let newFish: number = 0
  let hatchery = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  data.forEach(s => hatchery[s]++)

  for (let i = 0; i < days; i++) {
    hatchery[7] += hatchery[0]
    newFish = hatchery.shift()!
    hatchery.push(newFish!)
  }

  return hatchery.reduce((a, b) => a + b)
}
