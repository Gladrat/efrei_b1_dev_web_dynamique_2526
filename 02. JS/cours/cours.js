// imports
// defer
// use strict

// let age = prompt("Quel est votre age ?")
// age = Number(age)

// if (! isNaN(age)) {
//   console.log("Votre age est:", age, "ans");
//   console.log(`votre age est ${age} ans`);

// }

// let r = confirm("Vous êtes sûr ?")
// console.log(r);

// let arr = [1, 2, 3];
// console.log(arr);

// arr = [];
// console.log(arr);

const arr = [];

arr.push(99);
arr.push(98);
arr.push(97);
arr.push(96);
arr.push(95);

console.log(arr);
console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr.forEach((e) => {
  console.log(e);
  console.log(e ** 2);
  console.log("-");
});
