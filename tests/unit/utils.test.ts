import {getRandomSubset} from '../../src/utils.js';

describe('Tests on utils functions', () => {
  describe('getRandomSubset()', () => {
    it('returns an empty array when subsetSize is 0', () => {
      // Given
      const arraySize = 10;
      const subSetSize = 0;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      expect(result).toEqual([]);
    });

    it('returns an empty array when arraySize is 0', () => {
      // Given
      const arraySize = 0;
      const subSetSize = 5;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      expect(result).toEqual([]);
    });

    it('returns a subset of the correct size', () => {
      // Given
      const arraySize = 10;
      const subSetSize = 3;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      expect(result.length).toBe(subSetSize);
    });

    it('returns a subset with unique values', () => {
      // Given
      const arraySize = 100;
      const subSetSize = 5;

      // When
      const result = getRandomSubset(arraySize, subSetSize);
      const uniqueSet = new Set(result);

      // Then
      expect(uniqueSet.size).toBe(subSetSize);
    });

    it('returns a subset within the range of arraySize', () => {
      // Given
      const arraySize = 50;
      const subSetSize = 5;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      result.forEach((item) => {
        expect(item).toBeGreaterThanOrEqual(0);
        expect(item).toBeLessThan(arraySize);
      });
    });
  });
});
