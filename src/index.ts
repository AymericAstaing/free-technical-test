import inquirer from 'inquirer';

import {proceedPurchase} from './actions/purchase.ts';
import {LotteryEntry} from './types.ts';

const lotteryTickets: LotteryEntry[] = [];

async function main() {
  console.log('Je suis ici');

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choisissez une action :',
      choices: ['Purchase', 'Draw', 'Winners', 'Exit'],
    });

    switch (answer.action) {
      case 'Purchase':
        await proceedPurchase(lotteryTickets);
        break;
      case 'Draw':
        await proceedPurchase(lotteryTickets);
        break;
      case 'Winners':
        await proceedPurchase(lotteryTickets);
        break;
      case 'Exit':
        console.log('Program completed.');
        process.exit();
        break;
      default:
        console.log('Unrecognized action. Possible actions are: Purchase, Draw, Winners');
    }
  }
}

main();
