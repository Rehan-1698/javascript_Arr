console.log("======Q-1[copy array]======")
// let arr1 = [2,4,6,8,10]

// let arr2 = [...arr1]   // it's called spread oprator

// console.log(arr2)

console.log("============================")
/* 
let arr1 = [2,4,6,8,10]
let arr2 = [1,2,3,4,5]

let arr3 = [...arr1,...arr2]

console.log(arr3) */
console.log("======Q-2======")
/* 
a1 = [1, 2, 3, 4, 5]

// a1.shift();            // Remove element in an array fron statrting

let x = a1.unshift(10, 20, 30,)      // Add element in an array from starting
// add multiple element one time

console.log(a1, x)          // x give you length of an array

 */

console.log("======Q-3======")
// Revers of an array

let arr = [10,20,30,40,50,60,70,80,90,100];

// let Revarr = [];

// for(let i = arr.length-1; i>=0; i--){
//     Revarr.push(arr[i])
// }
arr.reverse();   // inbuilt method
console.log(arr)