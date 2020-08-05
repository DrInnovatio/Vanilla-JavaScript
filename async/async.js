// async & await
// clear style of using promise 

// 1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("Brandon");
//   });
// };

//1 . async

async function fetchUser() {
  return new Promise((resolve, reject) => {
    return "Brandon";
  });
};

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "Aplle";
}

async function getBanana() {
  await delay(1000);
  return "Banana";
}

// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(" + "));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);