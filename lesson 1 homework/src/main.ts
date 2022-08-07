/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

const vardas: string = 'Vardas';
const pavarde: string = 'Pavardė';

console.log(vardas, pavarde);
// Antra užduotis
const monets: number[] = [1, 2, 10, 20, 50];
console.log(monets);

// Trečia užduotis
type Product = {
  name: string,
  price: number,
};

//   Ketvirta užduotis
const product: Product = {
  name: 'pienas',
  price: 1,
};

const products: Product[] = [
  { name: 'Duona', price: 2 },
  { name: 'Kefyras', price: 1 },
  { name: 'Batonas', price: 3 },
];

//   Penkta užduotis
type Person = {
  name: string,
  age: number,
  status: string,
};

const person: Person = {
  name: 'vardas',
  age: 21,
  status: 'single',
};

const friends: Person[] = [
  { name: 'Petras', age: 41, status: 'single' },
  { name: 'Jonas', age: 25, status: 'married' },
  { name: 'Antanas', age: 29, status: 'single' },
];
