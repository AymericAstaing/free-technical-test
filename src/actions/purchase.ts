import inquirer from 'inquirer';

import {entriesPerDraw} from '../constants.js';
import {LotteryData, LotteryEntry} from '../types.js';

export async function proceedPurchase(lotteryData: LotteryData) {
  const {lotteryEntries, drawExecuted} = lotteryData;

  if (drawExecuted) {
    console.warn(
      'The draw has already been made and it is no longer possible to buy tickets. Go to the winners section to see the results.'
    );

    return;
  }

  if (lotteryEntries.length === entriesPerDraw) {
    console.log('Unfortunately, all the raffle tickets were sold out. Come back next month.');
    return;
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
    entryNumber: lotteryEntries.length + 1,
    winnerRank: -1,
  };

  lotteryEntries.push(userLotteryTicket);

  console.log(
    `Thank you ${userLotteryTicket.userName}, ticket successfully purchased! Your ticket and the associated ball are numbered: ${userLotteryTicket.entryNumber}.`
  );
}
