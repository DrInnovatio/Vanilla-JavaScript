// Q1. make a string out of an array

const fruits = ['apple', 'banana', 'orange', 'grape', 'peach'];
const result = fruits.join();
console.log(result)

// Q2. Make an array out of a string.

const cars = 'Toyota, AUDI, BMW, HYUNDAI, KIA, BENZ';
const result2 = cars.split(', ');   // separator must be put ', '
console.log(result2);

// Q3. Make this array look like this. [5,4,3,2,1];

const numArray1 = [1, 2, 3, 4, 5];
const result3 = numArray1.reverse();
console.log(result3);

// Q4. make new array without the first two elements.

const result4 = numArray1.splice(0, 2)
console.log(result4);
console.log(numArray1);



