import {LotteryData, LotteryEntry} from '../types.js';

export function displayWinners(lotteryData: LotteryData) {
  const {lotteryEntries, drawExecuted} = lotteryData;

  if (!drawExecuted) {
    console.log(
      'The draw has not yet been carried out. Come back to this section when it has been done to see the results.'
    );

    return;
  }

  const winnerFirst = lotteryEntries.find((entry: LotteryEntry) => entry.winnerRank === 1);
  const winnerSecond = lotteryEntries.find((entry: LotteryEntry) => entry.winnerRank === 2);
  const winnerThird = lotteryEntries.find((entry: LotteryEntry) => entry.winnerRank === 3);

  console.log(`
  CodeCraft Challenge Results

  1st ball: ${winnerFirst?.entryNumber}
  2nd ball: ${winnerSecond?.entryNumber}
  3rd ball: ${winnerThird?.entryNumber}

  Winners:
  [First Name 1] : ${winnerFirst?.userName}
  [First Name 2] : ${winnerSecond?.userName}
  [First Name 3] : ${winnerThird?.userName}
`);
}
