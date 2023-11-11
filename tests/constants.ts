const randomNames = [
  'Louise',
  'Rémi, Léo',
  'Lucie',
  'Julien',
  'Jean',
  'Jacques',
  'Marie',
  'Cyrielle',
  'Jeanne',
  'Paul',
  'Lola',
  'Louis',
  'Agathe',
  'Patrick',
  'Zoé',
  'Camille',
  'Inès',
  'Manon',
  'Anais',
  'Léonie',
  'Margaux',
  'Romane',
  'Olivier',
];

export function getRandomName() {
  const {length} = randomNames;
  const randomIndex = Math.floor(Math.random() * length);

  return randomNames[randomIndex];
}
