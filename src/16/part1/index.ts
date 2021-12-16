const hex2bin = (inputData: string) => {
  const hex = /[0-9A-F]+/.exec(inputData)?.[0] ?? ''
  console.log('🚀 ~ file: index.ts ~ line 7 ~ parseInput ~ hex', hex)
  return hex
    .split('')
    .map(x => parseInt(x, 16).toString(2).padStart(4, '0'))
    .join('')
}

const bin2dec = (num: string) => parseInt(num, 2)

const packetTypeIdConfig = {
  sum: 0,
  prod: 1,
  min: 2,
  max: 3,
  literalValue: 4,
  greaterThan: 5,
  lessThan: 6,
  equalTo: 7,
}

const getLiteralValue = (bin: string) => {
  let [prefix, literal] = ['', '']
  for (let i = 0; prefix !== '0'; i += 5) {
    prefix = bin[i]
    literal += bin.slice(i + 1, i + 5)
  }
  return bin2dec(literal)
}

const process = (bin: string) => {
  const version: number = bin2dec(bin.slice(0, 3))
  console.log('🚀 ~ file: index.ts ~ line 24 ~ part1 ~ version', version)
  const typeId = bin2dec(bin.slice(3, 6))
  console.log('🚀 ~ file: index.ts ~ line 27 ~ part1 ~ typeId', typeId)
  //   const packet = { totalVersion: version, value: -1, size: 6 };

  bin = bin.slice(6)

  if (typeId === packetTypeIdConfig.literalValue) {
    const literal = getLiteralValue(bin)
    console.log('🚀 ~ file: index.ts ~ line 54 ~ part1 ~ literal', literal)
  }
}

const part1 = (inputData: string[]) => {
  //   const testData = '38006F45291200'
  //   parseInput(testData)
  let bin = hex2bin(inputData[0])
  //   let bin = hex2bin(testData)
  process(bin)
  //   if (typeId === 4) {
  //     const a = binArr.slice(6, 11).slice(1).join('')
  //     console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ a', a)
  //     const b = binArr.slice(11, 16).slice(1).join('')
  //     console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ b', b)
  //     const c = binArr.slice(16, 21).slice(1).join('')
  //     console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ c', c)

  //     const num = parseInt([a, b, c].join(''), 2)
  //     console.log('🚀 ~ file: index.ts ~ line 21 ~ part1 ~ num', num)
  //   }
  //   if (typeId !== 4) {
  //     const lengthTypeId = parseInt(binArr.slice(6, 7).join(''), 2)
  //     console.log('🚀 ~ file: index.ts ~ line 35 ~ part1 ~ lengthTypeId', lengthTypeId)

  //     const length = parseInt(binArr.slice(7, 22).join(''), 2)
  //     console.log('🚀 ~ file: index.ts ~ line 37 ~ part1 ~ length', length)

  //     console.log(parseInt('01010',2)
  //     const a = binArr.slice(22, 33).join('')
  //     console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ a', a)
  //     const b = parseInt(binArr.slice(33, 49).slice(1).join(''), 2)
  //     console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ b', b)
  //     // const c = binArr.slice(16, 21).slice(1).join('')
  //     // console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ c', c)
  //     // const a = binArr.slice(6, 11).slice(1).join('')
  //     // console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ a', a)
  //     // const b = binArr.slice(11, 16).slice(1).join('')
  //     // console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ b', b)
  //     // const c = binArr.slice(16, 21).slice(1).join('')
  //     // console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ c', c)

  //     // const num = parseInt([a, b, c].join(''), 2)
  //     // console.log('🚀 ~ file: index.ts ~ line 21 ~ part1 ~ num', num)
  //   }
}

export default part1
