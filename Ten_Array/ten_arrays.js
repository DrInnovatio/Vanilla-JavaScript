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

console.clear();

// ===================================================================
// ===================================================================

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 29, true, 90),
  new Student('D', 29, false, 66),
  new Student('E', 29, true, 88),
  new Student('F', 29, true, 90)
];

// Q5 . find a student with the score 90. 

const result5 = students.find((student) => student.score === 90);
console.log(result5);

// Q6 . make an array of enrolled students
const result6 = students.filter((student) => student.enrolled === true);
console.log(result6);

// Q7 . make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

const result7 = students.map((student) => student.score);
console.log(result7);


console.clear();
// Q8 . Check if there is a student with the score lower than 50.

const result8 = students.some((student) => student.score < 50);
console.log(result8);

const result9 = students.every((student) => student.score < 50);
console.log(result9);

// Q9 . compute students' average score.

const result10 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result10 / students.length);

// Q10 . make a string containing all the scores.

const result11 = students.map((student) => student.score).join();
console.log(result11);

// Q11 . do Q10 sorted inascending order. result will be 45,66,80,88,90

const result12 = students
  .map((student) => student.score)
  .sort((a, b) => b - a)
  .join();

console.log(result12);  