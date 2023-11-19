


export default function getHealthy(heroClass) {
  if (heroClass.health > 50 && heroClass.health <= 100) {
    return 'healthy';
  }

  if (15 <= heroClass.health && heroClass.health <= 50) {
    return 'wounded';
  }

  if (0 < heroClass.health && heroClass.health < 15) {
    return 'critical';
  }
}

export function sortingHero (heroList) {
  return heroList.sort(function (a, b) {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
  })
}