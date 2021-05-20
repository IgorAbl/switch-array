'use strict';


//0 Создать числовой массив и проинициализировать его (*случайными числами).

const arr = [1, 4, 6, 8, 9];


//1 Удалить последний элемент из массива, добавить по элементу в начало и конец.

arr.pop();
arr.unshift(0);
arr.push(10);


//2 Вывести размер массива.

console.log('arr.length :>> ', arr.length);


//3 Вывести элементы с четными индексами.

const arr2 = [2, 7, 6, 5, 3, 8, 9];

console.log('arr2.filter(evenIndex) :>> ', arr2.filter(evenIndex));

function evenIndex(element, index) {
  return index % 2 === 0;
}

//4 Вывести только четные элементы (четные числа делятся на 2 без остатка).

const arr3 = [2, 7, 6, 5, 3, 8, 9];

console.log('arr3.filter(evenElement) :>> ', arr3.filter(evenElement));

function evenElement(element, index) {
  return element % 2 === 0;
}

// 5 Вывести индексы нулевых элементов (элемент равен нулю).

// const array = [1, 7, 5, 0, 7];

// console.log('array.filter(nullevki) :>> ', array.filter(nullevki));

// function nullevki (element, index) {
//     if (element === 0) {
//         return index;
//     }
// }

//6 Подсчитать количество нулевых элементов.



//7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).


const arr4 = [-1, 5, 0, 9, -10];

console.log('arr4.filter(big) :>> ', arr4.filter(big));

function big(element, index) {
  return element > 0;
}

const arrBigItem = arr4.filter(big);


// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

const arr5 = [-1, 5, 0, 9, -10]

const numberQuad = arr5.map(quad);

console.log('arr5.map(quad) :>> ', arr5.map(quad));

function quad(element) {
    return element ** 2;
}

//9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).

const arr6 = [1, 5, 0, 9, 10];

console.log('arr6.every(plus) :>> ', arr6.every(plus));

function plus(element) {
    return element >= 0;
}


//10 Проверить, есть ли в массиве хоть один отрицательный элемент.

const arr7 = [-1, 5, 0, 9, 10];

console.log('arr6.every(minus) :>> ', arr7.some(minus));

function minus(element) {
    return element < 0;
}


//11 Вывести элементы массива, возведенные в куб.

const arr8 = [-1, 5, 0, 9, 10];

console.log('arr8.map(minus) :>> ', arr8.map(minus));

function minus(element) {
    return element ** 3;
}