import getHealthy, { sortingHero } from './basic.js';

const heroArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log('worked');

console.log(getHealthy(heroArray[2]));

sortingHero(heroArray);

console.log(heroArray);
