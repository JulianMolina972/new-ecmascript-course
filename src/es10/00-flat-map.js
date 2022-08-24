//flat

const array = [1, 2, 3, 4, 5, [3, 2, [1,2]], 1, 3, 12];
console.log(array.flat(Infinity));

// flatMap

const array2 = [1, 2, 3, 4, 5, [3, 2, [1,2, [3,2]]], 1, 3, 12];
console.log(array2.flat(Infinity).map(x =>  x * 2));

