// JavaScript === dynamically typed language
'use strict';

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position

const fruits = ['Apple', 'Banana', 'Orenge', 'Grape', 'Melon'];
console.log(fruits)
console.log(fruits.length);

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index, array) => {
  console.log(fruit, index, array)
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Add, delete, copy

// push: add an item to the end 

fruits.push('Peach', 'Nuts');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift :  add an item to the beginning.

fruits.unshift('Mango', 'pineApple')
console.log(fruits);

// shift : remove an item from the beginning.
fruits.shift();
console.log(fruits);

// note!!!  shift and unshift are much slower than pop and push.

// splice : remove an item by index position. 

fruits.push('lemon', 'strawberry');
console.log(fruits);

fruits.splice(2, 2);
console.log(fruits);

fruits.splice(1, 1, 'watermelon', 'pear')
console.log(fruits);

const fruits2 = ['plum', 'berry'];
const film = ['HarryPoter', 'Frozen']
const newFruits = fruits.concat(film, fruits2);
console.log(newFruits);


// 5. Searching
// Finding the index

console.log(fruits.indexOf('pear'));
console.log(fruits.indexOf('lotion'));  // -1
console.log(fruits.includes('Hat'));  // false

console.clear();

fruits.push('pear');
console.log(fruits);
console.log(fruits.indexOf('pear'));
console.log(fruits.lastIndexOf('pear'));


