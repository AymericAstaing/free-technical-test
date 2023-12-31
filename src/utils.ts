export function getRandomSubset(arraySize: number, subsetSize: number): number[] {
  if (arraySize <= 0 || subsetSize <= 0) {
    return [];
  }

  const originalSet = Array.from({length: arraySize}, (_, index) => index);
  const result = [];

  for (let i = 0; i < subsetSize; i++) {
    const randomIndex = Math.floor(Math.random() * originalSet.length);
    const selectedItem = originalSet.splice(randomIndex, 1)[0];

    result.push(selectedItem);
  }

  return result;
}
