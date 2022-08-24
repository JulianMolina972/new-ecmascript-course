const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, banana, Apple, Apple, Orange, kiwi, Apple, Apple, Apple';

for (const match of fruits.matchAll(regex)) {
  console.table(match);
}