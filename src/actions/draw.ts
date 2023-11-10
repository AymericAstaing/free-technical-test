import {numberOfPossiblesWinners} from '../constants.js';
import {LotteryData} from '../types.js';
import {getRandomSubset} from '../utils.js';

export async function proceedDraw(lotteryData: LotteryData) {
  const {lotteryEntries, drawExecuted} = lotteryData;

  if (drawExecuted) {
    console.warn('The draw has already been made. Go to the winners section to see the results.');

    return false;
  }

  if (lotteryEntries.length <= 3) {
    console.warn(
      'Impossible to carry out the draw as at least 4 participants are required (fairness)'
    );

    return false;
  }

  console.log('Determining winners...');
  const winnersIds = getRandomSubset(lotteryEntries.length, numberOfPossiblesWinners);

  winnersIds.forEach((winnerId, index) => (lotteryEntries[winnerId].winnerRank = index + 1));
  console.log('Winners determined!');

  lotteryData.drawExecuted = true;
}
