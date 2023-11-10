import assert from 'assert';
import {describe, it} from 'node:test';

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
      assert.deepStrictEqual(result, []);
    });

    it('returns an empty array when arraySize is 0', () => {
      // Given
      const arraySize = 0;
      const subSetSize = 5;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      assert.deepStrictEqual(result, []);
    });

    it('returns a subset of the correct size', () => {
      // Given
      const arraySize = 10;
      const subSetSize = 3;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      assert.strictEqual(result.length, subSetSize);
    });

    it('returns a subset with unique values', () => {
      // Given
      const arraySize = 100;
      const subSetSize = 5;

      // When
      const result = getRandomSubset(arraySize, subSetSize);
      const uniqueSet = new Set(result);

      // Then
      assert.strictEqual(uniqueSet.size, subSetSize);
    });

    it('returns a subset within the range of arraySize', () => {
      // Given
      const arraySize = 50;
      const subSetSize = 5;

      // When
      const result = getRandomSubset(arraySize, subSetSize);

      // Then
      result.forEach((item) => {
        assert(item >= 0);
        assert(item < arraySize);
      });
    });
  });
});
