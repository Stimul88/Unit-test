import getHealthy, { sortingHero } from '../basic.js';

const heroArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('healthy test', () => {
  const result = getHealthy({ name: 'мечник', health: 51 });
  expect(result).toBe('healthy');
});

test('wounded test', () => {
  const result = getHealthy({ name: 'маг', health: 15 });
  expect(result).toBe('wounded');
});

test('critical test', () => {
  const result = getHealthy({ name: 'лучник', health: 1 });
  expect(result).toBe('critical');
});

test('sorted test', () => {
  sortingHero(heroArray);
  expect(heroArray).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
