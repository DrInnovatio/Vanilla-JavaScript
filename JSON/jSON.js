//  JSON
// JavaScript Object Notation

// 1. Object to JSON

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!!`)
  },
}

json1 = JSON.stringify(rabbit);
console.log(json1);

json2 = JSON.stringify(rabbit, ["name", "color"]);
console.log(json2);

json3 = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return key === 'name' ? 'Bora' : value;
});

console.log(json3);

// 2. JSON to Object
// parse(json)

console.clear();

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);

rabbit.jump();
// obj.jump();  // there is no method in it. 

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());