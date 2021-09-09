import { itemCounter } from '../counters.js';

describe('check all pokemon length', () => {
  test('3 pokemon', () => {
    const allPokes = [
      {
        name: 'Ruben',
        id: 23,
      },
      {
        name: 'Dammy',
        id: 11,
      },
      {
        name: 'Greg',
        id: 105,
      },
    ];

    expect(itemCounter(allPokes)).toBe(3);
  });

  test('No pokemon', () => {
    const allPokes = [];

    expect(itemCounter(allPokes)).toBe(0);
  });

  test('1 pokemon', () => {
    const allPokes = [
      {
        name: 'Ruben',
        id: 23,
      },
    ];

    expect(itemCounter(allPokes)).toBe(1);
  });
});
