
//froEach loop
let nums = [2, 3, 4, 5, 6,];
nums.forEach((num) => {
    console.log(num ** 2);// can also be written as num * num
});

//We are given array of marks of students.Filte out of the marls of students that scored 90+.
let marks = [97, 64, 42, 49, 94, 50, 86];
let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers)

//Take a number n as input from user. Create an array of numbers from 1 to n.
let n = prompt("enter a number:");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

//Use the reduce method to calculate sum of all numbers in the array.
let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);

//Use the reduce method to calculate product od all numbers inthe array.
let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
});

console.log("factorial =", factorial);