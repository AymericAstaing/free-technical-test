import {describe, expect, it} from '@jest/globals';

import {lotteryData_00, lotteryData_01, lotteryData_02} from './draw.data.js';
import {proceedDraw} from '../../../src/actions/draw.js';
import * as utils from '../../../src/utils.js';

describe('Tests for proceedDraw action', () => {
  describe('Error cases', () => {
    it('should do nothing when draw already executed', async () => {
      // When
      await proceedDraw(lotteryData_00);

      // Then
      expect(lotteryData_00.lotteryEntries).toEqual([]);
      expect(lotteryData_00.drawExecuted).toBe(true);
    });

    it('should do nothing when draw participants are less than 4', async () => {
      // When
      await proceedDraw(lotteryData_01);

      // Then
      expect(lotteryData_01.lotteryEntries[0].winnerRank).toBe(-1);
      expect(lotteryData_01.drawExecuted).toBe(false);
    });
  });

  describe('Success cases', () => {
    it('should determine winners on lotteryData and update draw execution state', async () => {
      // When
      jest.spyOn(utils, 'getRandomSubset').mockReturnValue([0, 2, 3]);

      await proceedDraw(lotteryData_02);

      // Then
      expect(lotteryData_02.lotteryEntries[0].winnerRank).toBe(1);
      expect(lotteryData_02.lotteryEntries[1].winnerRank).toBe(-1);
      expect(lotteryData_02.lotteryEntries[2].winnerRank).toBe(2);
      expect(lotteryData_02.lotteryEntries[3].winnerRank).toBe(3);

      expect(lotteryData_02.drawExecuted).toBe(true);
    });
  });
});
