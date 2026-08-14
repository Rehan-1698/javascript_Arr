/* Given an array arr of size n, Write a program to find the below 3 values.

1-Sum of all the elements in the array.

2-Average of all the elements in the array (Give the floor value).

3-Maximum element in the array.

Input Format:
First line contains n representing the number of elements.

Next line contains n space-separated integers, representing elements of the array arr.

Output Format:
In a single line print 3 space-separated integers representing Sum, Average and Maximum among all the array elements.

Example 1
Input

6
1 2 3 4 5 6
Output

21 3 6
Explanation:

The sum of all the elements of the array 1+2+3+4+5+6 is 21, the average (1+2+3+4+5+6)/6 is 3, and the maximum among all of them is 6.

Example 2
Input

5
1 0 -1 0 0
Output:

0 0 1 */
console.log("======Max======")
let arr1 = [10,20,50,60,100,70,80]
// let max = -Infinity;
// for(let i = 0; i<=arr.length; i++){
//   if(arr[i]>max){
//   max = arr[i]
//   }
// }
// console.log(max)
console.log(Math.max(...arr1));    // In Built function


console.log("=========Max==========")
let arr2 = [10, 20, 50, 60, 100, 70, 80]
// let min = Infinity;
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i]
//   }
// }
// console.log(min)
console.log(Math.min(...arr2));   //  In Built function


