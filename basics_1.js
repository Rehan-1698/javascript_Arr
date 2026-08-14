console.log("======Q1======")
// let arr = [2, 4, 6, 8, 10]
// console.log(arr[4]);

// Create an array and print the sum of Element.

/* let arr = [10,20,30,40,50]

let sum = 0;
for(let t of arr){  // for of Loop
    sum = sum + t;
}
console.log(sum); */

console.log("======Q2======")
//Take two array, and print sum of correspondin element of array.
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [2, 4, 6, 8, 10]

// let l = arr1.length;
// for (let i = 0; i <= l-1; i++) {
//     console.log(arr1[i] + arr2[i])
// }
console.log("======Q3======")

/* let arr = [2,4,6,8,10]  //add element in an array

arr[2] = 100;
console.log(arr, arr.length) */

console.log("======Q4======")
//Add and Remove element in an array
// let arr = [10,20,30,40,50]

// arr.push(60) //push add element from end
// arr.push(10,20,30)  // you can add multiple element 

// // arr.pop();    // pop remove element fron the end

// console.log(arr, arr.length);  


console.log("======Q5[Remove arr Element of index 3]======")
/* 
let arr = [10,20,30,40,50,60,70,80]

 let a1 = []

 for(let i = 0; i<=3; i++){
    a1.push(arr[i])
 }
  a1.pop();
//  console.log(a1)


 let a2 = []
for(let i = 4; i<=arr.length-1; i++){
    a2.push(arr[i])
}
// console.log(a1,a2)
for(let t of a2){
    // console.log(t);  // a2 ki saari value t me jakr print hogy 
    a1.push(t); 
}
console.log(a1);
 */

let arr = [10,20,30,40,50,60]

// arr.splice(2,1);   // 2nd method
for(let i = 2; i<=arr.length-2; i++){ // 3rd method
    arr[i] = arr[i+1]
// console.log(arr);

}
 arr.pop();
console.log(arr);
