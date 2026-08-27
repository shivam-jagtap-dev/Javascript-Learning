
//Question 1
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfilx"];
console.log(companies);

//a. Remove the first company fromm the array
// companies.shift(1);
// console.log(companies);

//b. Remove Uber & Add Ola in its place
companies.splice(2, 1, "Ola");
console.log(companies);

//c. Add amazon at the end
companies.push("Amazon");
console.log(companies);

