import { batchByBlankLines } from '../../helpers'

const part1 = (inputData: string[]) => {
  const [templateData, rulesData] = batchByBlankLines(inputData)

  const templateString = templateData[0]
  const template: string[] = templateString.split('')
  const rules: string[][] = rulesData.map(r => r.split(' -> '))

  // const testRuleData = ['NN -> C', 'NC -> B', 'CB -> H']
  // const testRules: string[][] = testRuleData.map(r => r.split(' -> '))

  let updatedTemplate = [...template]

  for (let step = 0; step < 10; step++) {
    let queue: [number, string][] = []
    // testRules.forEach(([match, insert]) => {
    rules.forEach(([match, insert]) => {
      const [matchA, matchB] = match.split('')
      const indexes = updatedTemplate.reduce((acc, item, i, arr) => {
        if (i < arr.length - 1 && matchA === item && matchB === arr[i + 1]) acc.push(i + 1)
        return acc
      }, [] as number[])

      indexes.forEach(i => {
        queue.push([i, insert])
      })
    })
    queue
      .sort((a, b) => a[0] - b[0])
      .forEach(([i, insert], add) => {
        updatedTemplate.splice(i + add, 0, insert)
      })
  }

  const polymerFrequency = updatedTemplate.reduce((acc, item) => {
    if (!acc[item]) acc[item] = 0
    acc[item]++
    return acc
  }, {} as { [key: string]: number })

  const sorted = Object.entries(polymerFrequency).sort((a, b) => b[1] - a[1])
  return sorted[0][1] - sorted[sorted.length - 1][1]
}

export default part1
