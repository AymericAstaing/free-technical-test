import inquirer from 'inquirer';

import {entriesPerDraw} from '../constants.js';
import {LotteryEntry} from '../types.js';

export async function proceedPurchase(lotteryTickets: LotteryEntry[]) {
  if (lotteryTickets.length === entriesPerDraw) {
    console.log('Unfortunately, all the raffle tickets were sold out. Come back next month.');
    return lotteryTickets;
  }

  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name:',
    },
  ]);

  const userLotteryTicket: LotteryEntry = {
    userName: answer.name,
    entryNumber: lotteryTickets.length + 1,
    winnerRank: -1,
  };

  lotteryTickets.push(userLotteryTicket);

  console.log(
    `Thank you ${userLotteryTicket.userName}, ticket successfully purchased! Your ticket and the associated ball are numbered: ${userLotteryTicket.entryNumber}.`
  );
}
