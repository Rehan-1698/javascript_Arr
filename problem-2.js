// let arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1]
// // Bring all zero's left and 1's right
// // [0, 0, 0, 0, 0,1, 1, 1, 1, 1]


// let i = 0;
// let j = arr.length - 1;

// while (i <= j) {
//     if (arr[i] == 0 && arr[j] == 1) {
//         i++;
//         j--;
//     }
//     else if (arr[i] == 0) {
//         i++;
//     }
//     else if (arr[j] == 1) {
//         j--;
//     }
//     else {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//     }
// }
// console.log(arr);

console.log("===============================")
// Delete all the element of an array

// arr = [10,20,30,40,50,60]
// 1st approach
//  arr = []
//  console.log(arr)
console.log("=================2nd approach====================")
// let l = arr.length-1
// for(let i = 0; i<=l; i++){
//     arr.pop();
// }
// console.log(arr);



console.log("=================2nd approach====================")
// function ArrayProblem() {
//   // Write code here
//   let arr = [2,4,6,4,2,8,2,6,4]
//   let k = 10;
//   let count = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + arr[i + 1] === k) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(ArrayProblem());


//find the digit 40 is present in an array or Not,

// let arr = [10,20,40,30,50,60]
// let flag = false;
// for(let i = 0; i<=arr.length-1; i++){
//   if(arr[i]==40){
//     console.log("yes")
//     flag = true;
//     break;
//   }
//   // else{
//   //   console.log("No")
//   // }
// }
// if(flag ==false){
//   console.log("No")
// }


// find subarray of size 2/3
/* let arr = [10,20,40,30,50,60]
for(let i = 0; i<=arr.length-2; i++){
  let subArray = arr.slice(i,i+2);    // change here for subarray size (i, i+3)
  console.log(subArray)
} */

  console.log("=====================Remove the element of index-2(30)=============")
  let arr = [10,20,30,40,50,60]

  for(let i = 2; i<=arr.length-2; i++){
    arr[i]=arr[i+1];
    // console.log(arr)
  }
  arr.pop();
  console.log(arr); 