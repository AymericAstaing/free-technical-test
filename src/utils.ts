export function getRandomSubset(numberOfParticipants: number, subsetSize: number): number[] {
  const participantsIds = Array.from({length: numberOfParticipants}, (_, index) => index);
  console.log('Participants ids: ', participantsIds);
  const result = [];

  for (let i = 0; i < subsetSize; i++) {
    const randomIndex = Math.floor(Math.random() * participantsIds.length);
    const selectedItem = participantsIds.splice(randomIndex, 1)[0];
    result.push(selectedItem);
  }

  return result;
}
