import {LotteryData} from '../../../src/types.js';

export const lotteryData_00: LotteryData = {lotteryEntries: [], drawExecuted: true};

export const lotteryData_01: LotteryData = {
  lotteryEntries: [{userName: 'Paul', entryNumber: 1, winnerRank: -1}],
  drawExecuted: false,
};

export const lotteryData_02: LotteryData = {
  lotteryEntries: [
    {userName: 'Paul', entryNumber: 1, winnerRank: -1},
    {userName: 'Jean', entryNumber: 2, winnerRank: -1},
    {userName: 'Louis', entryNumber: 3, winnerRank: -1},
    {userName: 'Leo', entryNumber: 4, winnerRank: -1},
  ],
  drawExecuted: false,
};
