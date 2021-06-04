'use strict'

const arr1 = [1, 2];
const arr2 = [5, 6, 7, 8];

const map1 = new Map();
map1.set(arr1, arr2);

for (const key of map1.keys()) {
  console.log('key :>> ', key);
}

for (const value of map1.values()) {
  console.log('value :>> ', value);
}

