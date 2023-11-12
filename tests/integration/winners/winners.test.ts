import {lotteryData_00, lotteryData_01, lotteryData_02} from './winners.data.js';
import {displayWinners} from '../../../src/actions/winners.js';

describe('Tests for displayWinners action', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  afterEach(() => {
    consoleSpy.mockClear();
  });

  describe('Error cases', () => {
    it('should not display winners when draw not executed', async () => {
      // When
      await displayWinners(lotteryData_00);

      // Then
      expect(consoleSpy.mock.calls[0][0]).toContain('The draw has not yet been carried out.');
    });
  });

  describe('Success cases', () => {
    it('should display winners with correct data', async () => {
      // When
      await displayWinners(lotteryData_01);

      // Then
      expect(consoleSpy.mock.calls[0][0]).toBe(
        'CodeCraft Challenge Results\n\n' +
          '  1st ball: 3\n' +
          '  2nd ball: 1\n' +
          '  3rd ball: 4\n\n' +
          '  Winners:\n' +
          '  Louis: 83€\n' +
          '  Paul: 17€\n' +
          '  Leo: 11€'
      );
    });

    it('should display winners with correct data with decimal numbers', async () => {
      // When
      await displayWinners(lotteryData_02);

      // Then
      expect(consoleSpy.mock.calls[0][0]).toBe(
        'CodeCraft Challenge Results\n\n' +
          '  1st ball: 4\n' +
          '  2nd ball: 3\n' +
          '  3rd ball: 2\n\n' +
          '  Winners:\n' +
          '  Alix: 84€\n' +
          '  Louis: 17€\n' +
          '  David: 11€'
      );
    });
  });
});
