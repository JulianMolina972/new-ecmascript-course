const list = new Set();
console.log(list);

list.add('a');
list.add('b').add('c').add('d').add('d');

console.log(list);

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [...new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]