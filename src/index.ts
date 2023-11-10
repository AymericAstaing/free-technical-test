import inquirer from 'inquirer';

import {proceedDraw} from './actions/draw.js';
import {proceedPurchase} from './actions/purchase.js';
import {displayWinners} from './actions/winners.js';
import {LotteryData, LotteryEntry} from './types.js';

const lotteryTickets: LotteryEntry[] = [];
let drawExecuted = false;

async function main() {
  const lotteryData: LotteryData = {
    lotteryEntries: [],
    drawExecuted: false,
  };

  while (true) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Hello, please choose an action:',
      choices: ['Purchase', 'Draw', 'Winners', 'Exit'],
    });

    switch (answer.action) {
      case 'Purchase':
        await proceedPurchase(lotteryTickets);
        break;
      case 'Draw':
        await proceedDraw(lotteryTickets, drawExecuted);
        break;
      case 'Winners':
        await displayWinners(lotteryTickets, drawExecuted);
        break;
      case 'Exit':
        console.log('Program completed.');
        process.exit();
        break;
      default:
        console.log('Unrecognized action. Possible actions are: Purchase, Draw, Winners');
    }

    console.log('Tickets: ', lotteryTickets);
    console.log('Draw executed: ', drawExecuted);
  }
}

main();
