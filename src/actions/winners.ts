import {winningPrizesRates} from '../constants.js';
import {LotteryData, LotteryEntry} from '../types.js';

export function displayWinners(lotteryData: LotteryData) {
  const {lotteryEntries, drawExecuted, prizePool} = lotteryData;

  if (!drawExecuted) {
    console.log(
      'The draw has not yet been carried out. Come back to this section when it has been done to see the results.'
    );

    return;
  }

  const findEntryByRank = (rank: number) => {
    return lotteryEntries.find((entry: LotteryEntry) => entry.winnerRank === rank);
  };

  const winnerRank1 = findEntryByRank(1);
  const winnerRank2 = findEntryByRank(2);
  const winnerRank3 = findEntryByRank(3);

  const firstPrize = Math.round((prizePool / 2) * winningPrizesRates[0]);
  const secondPrize = Math.round((prizePool / 2) * winningPrizesRates[1]);
  const thirdPrize = Math.round((prizePool / 2) * winningPrizesRates[2]);

  console.log(`CodeCraft Challenge Results

  1st ball: ${winnerRank1?.entryNumber}
  2nd ball: ${winnerRank2?.entryNumber}
  3rd ball: ${winnerRank3?.entryNumber}

  Winners:
  ${winnerRank1?.userName}: ${firstPrize}
  ${winnerRank2?.userName}: ${secondPrize}
  ${winnerRank3?.userName}: ${thirdPrize}`);
}
