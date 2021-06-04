'use strict';


function addNum(n) {
    return function(m) {
        return n + m;
    }
}

const add = addNum(5);
const result = add(10);

console.log('result :>> ', result);