// Prix des ingrédients
const farine = 1;
const sucre = 1.5;
const oeuf = 3;
const lait = 2.5;
const chocolat = 10;
const decoration = 3.5;
const fruits = 5;

// Calcul du prix coutant
// Math.floor() >> Arrondir à l'unité inférieure
// Math.ceil() >> Arrondir à l'unité supérieure

const coutForetNoire =
  farine + sucre * 2 + oeuf * 2 + lait / 2 + chocolat * 2 + decoration * 5;
console.log(coutForetNoire);

const coutTarteFraises =
  fruits * 2 +
  farine / 2 +
  sucre +
  oeuf / 2 +
  lait / 2 +
  chocolat / 2 +
  decoration * 2;
console.log(coutTarteFraises);

// Calcul de la marge et du prix vendu

const coefMarge = prompt('Quel coefficient souhaitez-vous appliquer ?');

console.log(
  'Fôret Noire / Prix coutant = ' +
    coutForetNoire +
    ' €. ' +
    'Prix vendu = ' +
    Math.floor(coutForetNoire + (coutForetNoire * coefMarge) / 100) +
    ' €.'
);
console.log(
  'Tarte aux fraises / Prix coutant = ' +
    coutTarteFraises +
    ' €. ' +
    'Prix vendu = ' +
    Math.floor(coutTarteFraises + (coutTarteFraises * coefMarge) / 100) +
    ' €.'
);

// Calcul rendement
const tresorerie = coutForetNoire * 6 + coutTarteFraises * 6;
console.log(
  'Il faut prévoir ' + tresorerie + ' euros de trésorerie quotidienne.'
);
const gateauxVendus = (6 * 90) / 100;

const recetteForetNoire = Math.floor( 
  (coutForetNoire + (coutForetNoire * coefMarge) / 100) *gateauxVendus * 5);
const recetteTarteFraises = Math.floor(
  (coutTarteFraises + (coutTarteFraises * coefMarge) / 100) * gateauxVendus * 5
);

const recetteGlobal = Math.floor(recetteForetNoire + recetteTarteFraises);
console.log('La recette quotidienne sera de ' + recetteGlobal + ' €.');

const benefice = Math.floor(recetteGlobal - tresorerie);
console.log('Le bénéfice sera de ' + benefice + ' €.');
const isEven = benefice % 2 === 0 && console.log('Bim...');
const isOdd = benefice % 2 !== 0 && console.log('Bam...');
