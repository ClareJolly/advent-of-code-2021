const part1 = (inputData: string[]) => {
  console.log('🚀 ~ file: index.ts ~ line 2 ~ part1 ~ inputData', inputData)

  const data = inputData.map(d => JSON.parse(d))
  console.log('🚀 ~ file: index.ts ~ line 5 ~ part1 ~ data', data)

  //   const sample = data.slice(0, 2)
  const sample = [
    [
      [[[4, 3], 4], 4],
      [7, [[8, 4], 9]],
    ],
    [1, 1],
  ]
  console.log('🚀 ~ file: index.ts ~ line 12 ~ part1 ~ sample', sample)

  function add(a, b) {
    let changed,
      p = [a, b]
    // while (true) {
    //   ;[changed, , p] = explode(p)
    //   if (changed) continue
    //   ;[changed, p] = split(p)
    //   if (changed) continue
    //   break
    // }
    return p
  }
  const adding = sample.reduce(add)
  console.dir(adding, { depth: null })
  //   const add = [sample[0], sample[1]]
  //   console.log('🚀 ~ file: index.ts ~ line 15 ~ part1 ~ add', add)

  //   let level = 0
  //   let reduced = false
  //   let x = 0
  //   let num = add
  //   while (!reduced && x < 5) {
  //     if (Array.isArray(num[0])) {
  //       console.log('🚀 ~ file: index.ts ~ line 30 ~ part1 ~ num[0]', num[0])
  //       console.log(num[0])
  //       num = num[0]
  //       level++
  //     }
  //     x++
  //   }
}

export default part1
