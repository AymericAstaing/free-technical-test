import assert from 'assert';
import {describe, it} from 'node:test';

import {lotteryData_00, lotteryData_01} from './draw.data.js';

import {proceedDraw} from '../../../src/actions/draw.js';
/* import {getRandomSubset} from '../../../src/utils.js'; */

describe('Tests for proceedDraw action', () => {
  describe('Error cases', () => {
    it('do nothing and log when draw already executed', async () => {
      // When
      await proceedDraw(lotteryData_00);

      // Then
      assert.deepStrictEqual(lotteryData_00.lotteryEntries, []);
      assert.strictEqual(lotteryData_00.drawExecuted, true);
    });

    it('do nothing and log when draw participants are less than 4', async () => {
      // When
      await proceedDraw(lotteryData_01);

      // Then
      assert.strictEqual(lotteryData_01.lotteryEntries[0].winnerRank, -1);
      assert.strictEqual(lotteryData_01.drawExecuted, false);
    });

    /*     it('logs the process of determining winners and updates lotteryData', async () => {
      // Given
      const lotteryEntries = [{}, {}, {}];
      const lotteryData = {lotteryEntries, drawExecuted: false};

      // Stubbing console.log to capture log messages
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      // Mocking getRandomSubset to return [0, 1, 2] (example winner ids)
      jest.mock('./utils', () => ({
        getRandomSubset: jest.fn(() => [0, 1, 2]),
      }));

      // When
      proceedDraw(lotteryData);

      // Then
      expect(consoleLogSpy).toHaveBeenCalledWith('Determining winners...');
      expect(consoleLogSpy).toHaveBeenCalledWith('Winners determined!');
      expect(lotteryData.drawExecuted).toBe(true);
      expect(lotteryEntries[0].winnerRank).toBe(1);
      expect(lotteryEntries[1].winnerRank).toBe(2);
      expect(lotteryEntries[2].winnerRank).toBe(3);

      // Clean up
      consoleLogSpy.mockRestore();
      jest.resetModules(); // Reset mock module to restore the original getRandomSubset
    }); */
  });
});
