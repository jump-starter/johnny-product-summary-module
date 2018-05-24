/* Test Script for Random Number generator used in Lua script */

const obj = {};

for (let i = 0; i < 1e7; i += 1) {
  const num = (Math.random() < 0.8) ? 9e6 + Math.floor(1e6 * (Math.random())) : 1 + Math.floor(9e6 * (Math.random()));
  if (!obj[num]) {
    obj[num] = 1;
  } else {
    obj[num] += 1;
  }
}

Object.keys(obj).forEach((key) => {
  obj[key] /= 1e7;
});

console.log(obj);
