import { batchByBlankLines } from '../../helpers'
import { Frequency, RulesTable } from '../types'

const formatRules = (rules: string[][]) => {
  return rules.reduce((acc, [polymer, insert]) => {
    acc[polymer] = insert
    return acc
  }, {} as { [key: string]: string })
}

const setupInitialCounts = (
  template: string[],
  singleElementCounter: Frequency,
  elementPairCounter: Frequency,
) => {
  template.forEach((element, i) => {
    const singleKey = element
    const pairKey = template[i - 1] + element
    singleElementCounter[singleKey] = singleElementCounter[singleKey] + 1 || 1
    elementPairCounter[pairKey] = elementPairCounter[pairKey] + 1 || 1
  })
}

const processStep = (
  rulesTable: RulesTable,
  elementPairCounter: Frequency,
  stepElementPairCounter: Frequency,
  singleElementCounter: Frequency,
) => {
  for (const pair in rulesTable) {
    if (elementPairCounter[pair]) {
      const pairCount = elementPairCounter[pair]
      const insert = rulesTable[pair]
      const pairA = pair[0] + insert
      const PairB = insert + pair[1]

      stepElementPairCounter[pairA] = stepElementPairCounter[pairA] + pairCount || pairCount
      stepElementPairCounter[PairB] = stepElementPairCounter[PairB] + pairCount || pairCount
      singleElementCounter[insert] = singleElementCounter[insert] + pairCount || pairCount
    }
  }
}

export const getSolution = (inputData: string[], steps: number = 10) => {
  const [templateData, rulesData] = batchByBlankLines(inputData)

  const template: string[] = templateData[0].split('')
  const rules: string[][] = rulesData.map(r => r.split(' -> '))

  const rulesTable = formatRules(rules)

  const singleElementCounter: Frequency = {}
  let elementPairCounter: Frequency = {}

  setupInitialCounts(template, singleElementCounter, elementPairCounter)

  for (let step = 0; step < steps; step++) {
    const stepElementPairCounter: Frequency = {}

    processStep(rulesTable, elementPairCounter, stepElementPairCounter, singleElementCounter)

    elementPairCounter = stepElementPairCounter
  }

  const frequencies = []
  for (const char in singleElementCounter) {
    frequencies.push(singleElementCounter[char])
  }

  return Math.max(...frequencies) - Math.min(...frequencies)
}
