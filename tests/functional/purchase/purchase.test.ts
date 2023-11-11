import {lotteryData_00} from './purchase.data.js';
import {proceedPurchase} from '../../../src/actions/purchase.js';
import {LotteryData} from '../../../src/types.js';
import {getRandomName} from '../../constants.js';

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

    it('should handle all tickets sold out', async () => {
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

      // When
      await proceedPurchase(lotteryData);

      // Then
      expect(lotteryData.drawExecuted).toBe(false);
    });

    /*     describe('Success cases', () => {
      it('should successfully proceed with the purchase', async () => {
        const mockData = {
          lotteryEntries: [],
          drawExecuted: false,
        };

        const mockUserName = 'John Doe';

        // Mock inquirer.prompt to return a predefined answer
        require('inquirer').prompt.mockResolvedValueOnce({name: mockUserName});

        console.log = jest.fn(); // Mock the console.log function

        await proceedPurchase(mockData);

        expect(mockData.lotteryEntries.length).toBe(1);
        expect(mockData.lotteryEntries[0].userName).toBe(mockUserName);

        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining(`Thank you ${mockUserName}, ticket successfully purchased!`)
        );
      });
    }); */
  });
});
