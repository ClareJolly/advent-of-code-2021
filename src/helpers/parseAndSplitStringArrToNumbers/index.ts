const parseAndSplitStringArrToNumbers = (inputData: string[]): number[][] => {
  return inputData.map(d => d.split('').map(d => Number(d)))
}
export default parseAndSplitStringArrToNumbers
