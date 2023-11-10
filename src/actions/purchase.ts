import inquirer from 'inquirer';
import {LotteryEntry} from 'src/types.ts';

export async function proceedPurchase(lotteryTickets: LotteryEntry[]): Promise<LotteryEntry[]> {
  const localLotteryTickets = lotteryTickets;

  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Entrez votre nom :',
    },
    {
      type: 'number',
      name: 'ticketNumber',
      message: 'Entrez le numéro de votre billet :',
    },
  ]);

  localLotteryTickets.push({
    userName: answer.name,
    ticketNumber: answer.ticketNumber,
  });

  console.log('Ticket successfully purchased');
  return localLotteryTickets;
}
