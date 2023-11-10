import inquirer from 'inquirer';

import {proceedDraw} from './actions/draw.js';
import {proceedPurchase} from './actions/purchase.js';
import {displayWinners} from './actions/winners.js';
import {LotteryData} from './types.js';

async function main() {
  const lotteryData: LotteryData = {
    lotteryEntries: [],
    drawExecuted: false,
  };

  const possibleActions = ['Purchase', 'Draw', 'Winners', 'Exit'];

  while (true) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Hello, please choose an action:',
      choices: possibleActions,
    });

    switch (answer.action) {
      case 'Purchase':
        await proceedPurchase(lotteryData);
        break;
      case 'Draw':
        await proceedDraw(lotteryData);
        break;
      case 'Winners':
        await displayWinners(lotteryData);
        break;
      case 'Exit':
        console.log('Program completed.');
        process.exit();
        break;
      default:
        console.log(`Unrecognized action. Possible actions are: ${possibleActions}`);
    }
  }
}

main();
