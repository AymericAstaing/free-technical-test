import {LotteryData} from '../../../src/types.js';

export const lotteryData_00: LotteryData = {lotteryEntries: [], drawExecuted: true, prizePool: 0};

export const lotteryData_01: LotteryData = {
  lotteryEntries: [{userName: 'Paul', entryNumber: 1, winnerRank: -1}],
  drawExecuted: false,
  prizePool: 0,
};

export const lotteryData_02: LotteryData = {
  lotteryEntries: [
    {userName: 'Paul', entryNumber: 1, winnerRank: -1},
    {userName: 'Jean', entryNumber: 2, winnerRank: -1},
    {userName: 'Louis', entryNumber: 3, winnerRank: -1},
    {userName: 'Leo', entryNumber: 4, winnerRank: -1},
  ],
  drawExecuted: false,
  prizePool: 220,
};
