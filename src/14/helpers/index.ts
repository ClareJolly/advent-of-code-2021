import { batchByBlankLines } from '../../helpers'

export const getSolutionWithLoops = (inputData: string[], steps: number = 10) => {
  // const [templateData, rulesData] = batchByBlankLines(inputData)

  const rules = inputData.slice(2).map(a => a.split(' -> '))
  let template = inputData[0].split('')

  // const templateString = templateData[0]
  // const template: string[] = templateString.split('')
  // const rules: string[][] = rulesData.map(r => r.split(' -> '))

  const rulesTable = rules.reduce((acc, [polymer, insert]) => {
    acc[polymer] = insert
    return acc
  }, {} as { [key: string]: string })

  let updatedTemplate = [...template]

  for (let step = 0; step < steps; step++) {
    const newTemplate: string[] = []
    updatedTemplate.forEach((p, i) => {
      let currentPair
      if (i < updatedTemplate.length - 1) currentPair = p + updatedTemplate[i + 1]
      if (currentPair) {
        if (i === 0) newTemplate.push(currentPair[0])
        if (rulesTable[currentPair]) newTemplate.push(rulesTable[currentPair])

        newTemplate.push(currentPair[1])
      }
    })
    updatedTemplate = newTemplate
  }

  const uniqueElements = [...new Set(updatedTemplate)]
  // const polymerFrequency: { [key: string]: number } = {}
  // uniqueElements.forEach(e => (polymerFrequency[e] = updatedTemplate.filter(a => e === a).length))
  // return Math.max(...Object.values(polymerFrequency)) - Math.min(...Object.values(polymerFrequency))
  const count = []
  uniqueElements.forEach(
    element => (count[element] = updatedTemplate.filter(a => element === a).length),
  )
  const occurrences = Object.keys(count).map(key => count[key])

  console.log(Math.max(...occurrences) - Math.min(...occurrences))
}
