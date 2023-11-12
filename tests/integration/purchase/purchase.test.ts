import {lotteryData_00, lotteryData_01} from './purchase.data.js';
import {proceedPurchase} from '../../../src/actions/purchase.js';
import {LotteryData, LotteryEntry} from '../../../src/types.js';
import {getRandomName} from '../../constants.js';

const inquirer = require('inquirer');

jest.mock('inquirer');

describe('Tests for proceedPurchase action', () => {
  describe('Error cases', () => {
    it('should do nothing when draw already executed', async () => {
      // When
      await proceedPurchase(lotteryData_00);

      // Then
      expect(lotteryData_00.lotteryEntries).toEqual([]);
      expect(lotteryData_00.drawExecuted).toBe(true);
    });

    it('should do nothing when all tickets are sold out', async () => {
      // Given
      const lotteryData: LotteryData = {
        drawExecuted: false,
        lotteryEntries: [],
      };

      for (let i = 0; i < 50; ++i) {
        lotteryData.lotteryEntries.push({
          userName: getRandomName(),
          entryNumber: i,
          winnerRank: -1,
        });
      }

      const initialLength = lotteryData.lotteryEntries.length;

      // When
      await proceedPurchase(lotteryData);

      // Then
      expect(lotteryData.lotteryEntries.length).toBe(initialLength);
      expect(lotteryData.drawExecuted).toBe(false);
    });
  });

  describe('Success cases', () => {
    it('should proceed purchase and append Jean on lotteryData', async () => {
      // Given
      inquirer.prompt = () => Promise.resolve({name: 'Jean'});

      // When
      await proceedPurchase(lotteryData_01);

      expect(lotteryData_01.lotteryEntries.length).toBe(1);
      const expectedLotteryEntry: LotteryEntry = {
        userName: 'Jean',
        entryNumber: 1,
        winnerRank: -1,
      };
      expect(lotteryData_01.lotteryEntries[0]).toStrictEqual(expectedLotteryEntry);
    });
  });
});
