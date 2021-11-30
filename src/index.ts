import yargs from 'yargs'
const argv = yargs.argv

const run = async () => {
  const day = argv.day || argv.d || '01'
  const { default: dayFunc } = await import(`./${day}`)
  dayFunc()
}

run()
