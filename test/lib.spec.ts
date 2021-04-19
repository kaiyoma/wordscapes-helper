/* eslint-env jest */

import { computeAlphabet, formatNumber, isContained } from '../src/lib';

describe('computeAlphabet', () => {
  test('should work properly', () => {
    expect(computeAlphabet('a')).toEqual({ a: 1 });
    expect(computeAlphabet('aa')).toEqual({ a: 2 });
    expect(computeAlphabet('dad')).toEqual({ a: 1, d: 2 });
    expect(computeAlphabet('dadenhudd')).toEqual({ a: 1, d: 4, e: 1, h: 1, n: 1, u: 1 });
  });
});

describe('formatNumber', () => {
  test('should work properly', () => {
    expect(formatNumber(42)).toBe('42');
    expect(formatNumber(424)).toBe('424');
    expect(formatNumber(4242)).toBe('4,242');
    expect(formatNumber(42424)).toBe('42,424');
    expect(formatNumber(424242)).toBe('424,242');
  });
});

describe('isContained', () => {
  const foo = computeAlphabet('foo');
  const food = computeAlphabet('food');
  const foodie = computeAlphabet('foodie');

  test('should work properly', () => {
    expect(isContained(foo, foo)).toBe(true);
    expect(isContained(foo, food)).toBe(false);
    expect(isContained(foo, foodie)).toBe(false);

    expect(isContained(food, foo)).toBe(true);
    expect(isContained(food, food)).toBe(true);
    expect(isContained(food, foodie)).toBe(false);

    expect(isContained(foodie, foo)).toBe(true);
    expect(isContained(foodie, food)).toBe(true);
    expect(isContained(foodie, foodie)).toBe(true);
  });
});
