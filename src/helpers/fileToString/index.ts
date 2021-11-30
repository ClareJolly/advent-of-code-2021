import fs from 'fs'

const fileToString = (filepath: string) => {
  return fs.readFileSync(filepath, 'utf-8')
}

export default fileToString
