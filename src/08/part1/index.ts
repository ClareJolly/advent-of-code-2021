import { sortArrayOfObjects } from '../../helpers'

const numberConfig = [
  'abcefg',
  'cf',
  'acdeg',
  'acdfg',
  'bcdf',
  'abdfg',
  'abdefg',
  'acf',
  'abcdefg',
  'abcdfg',
]

const part1 = (inputData: string[]) => {
  const data = inputData.map(d => d.split(' | '))
  console.log('  ~ file: index.ts ~ line 5 ~ part1 ~ data', data)

  const lengthFrequency = numberConfig.reduce((acc, item) => {
    if (!acc[item.length]) acc[item.length] = 0
    acc[item.length]++
    return acc
  }, {} as { [key: string]: number })
  console.log('  ~ file: index.ts ~ line 22 ~ lengthFrequency ~ lengthFrequency', lengthFrequency)

  const singleSet = Object.entries(lengthFrequency)
    .filter(([_, num]) => num === 1)
    .map(([key]) => key)
  console.log('  ~ file: index.ts ~ line 28 ~ part1 ~ singleSet', singleSet)

  // const easyMatches = singleSet.reduce((acc,item)=>{
  // const match = numberConfig.filter(n=>n.length===)
  // },{})
}

export default part1
