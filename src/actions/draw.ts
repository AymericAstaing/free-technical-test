import {numberOfPossiblesWinners} from '../constants.js';
import {LotteryEntry} from '../types.js';
import {getRandomSubset} from '../utils.js';

export async function proceedDraw(
  lotteryTickets: LotteryEntry[],
  drawExecuted: boolean
): Promise<boolean> {
  if (drawExecuted) {
    console.log('The draw has already been made. Go to the winners section to see the results.');

    return false;
  }

  if (lotteryTickets.length <= 3) {
    console.log(
      'Impossible to carry out the draw as at least 4 participants are required (fairness)'
    );

    return false;
  }

  console.log('Determining winners...');
  const winnersIds = getRandomSubset(lotteryTickets.length, numberOfPossiblesWinners);

  winnersIds.forEach((winnerId, index) => (lotteryTickets[winnerId].winnerRank = index + 1));
  console.log('Winners determined!');

  drawExecuted = true;

  return true;
}
