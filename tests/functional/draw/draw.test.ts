import assert from 'assert';
import {describe, it, mock} from 'node:test';

import {lotteryData_00, lotteryData_01, lotteryData_02} from './draw.data.js';

import {proceedDraw} from '../../../src/actions/draw.js';

import {getRandomSubset} from '../../../src/utils.js';

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

    it('logs the process of determining winners and updates lotteryData', async () => {
      // Given
      mock.method(getRandomSubset, '', () => [0, 2, 3]);

      // When
      await proceedDraw(lotteryData_02);

      // Then
      console.log('res: ', lotteryData_02);
      assert.strictEqual(lotteryData_02.lotteryEntries[0].winnerRank, 1);
      assert.strictEqual(lotteryData_02.lotteryEntries[1].winnerRank, -1);
      assert.strictEqual(lotteryData_02.lotteryEntries[2].winnerRank, 2);
      assert.strictEqual(lotteryData_02.lotteryEntries[3].winnerRank, 3);

      assert.strictEqual(lotteryData_02.drawExecuted, true);

      mock.reset();
    });
  });
});
