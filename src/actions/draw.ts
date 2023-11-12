import {numberOfPossiblesWinners} from '../constants.js';
import {LotteryData} from '../types.js';
import {getRandomSubset} from '../utils.js';

export async function proceedDraw(lotteryData: LotteryData) {
  const {lotteryEntries, drawExecuted} = lotteryData;

  if (drawExecuted) {
    console.warn('The draw has already been made. Go to the winners section to see the results.');

    return;
  }

  const minimumEntriesNbr = numberOfPossiblesWinners + 1;
  if (lotteryEntries.length < minimumEntriesNbr) {
    console.warn(
      `Impossible to carry out the draw as at least ${minimumEntriesNbr} participants are required (fairness)`
    );

    return;
  }

  console.info('Determining winners...');
  const winnersIds = getRandomSubset(lotteryEntries.length, numberOfPossiblesWinners);

  winnersIds.forEach((winnerId, index) => (lotteryEntries[winnerId].winnerRank = index + 1));
  console.info('Winners determined!');

  lotteryData.drawExecuted = true;
}
