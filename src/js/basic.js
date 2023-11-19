export default function getHealthy(heroClass) {
  if (heroClass.health > 50 && heroClass.health <= 100) {
    return 'healthy';
  }

  if (heroClass.health >= 15 && heroClass.health <= 50) {
    return 'wounded';
  }

  if (heroClass.health > 0 && heroClass.health < 15) {
    return 'critical';
  }
}

export function sortingHero(heroList) {
  heroList.sort((a, b) => {
    return b.health - a.health;
  });
}
