let name = "Shivam Jagtap";
const PI = 3.14;
console.log(name, PI);
{
    let a = 5;
    console.log(a);
}



{
    //Premitive Data-types
    let age = 24; /* Number */
    let fullName = "Shivam Laxman Jagtap" /* String */
    let ifFollow = true; /* Boolean */
    let u = undefined; /* Undefined */
    let n = null; /* Null */
    let x = BigInt("123"); /* BigINt */
    let y = Symbol("Hello!"); /* Symbol */
}

//objects = collection of key value pairs
const student = {
    fullNAME: "Shivam Jagtap",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};


{
    //Arthmetic Operators
    let a = 5;
    let b = 5;
    console.log("a+b=", a + b); //addition
    console.log("a-b=", a - b); //substraction
    console.log("a*b=", a * b); //multiplication
    console.log("a/b=", a / b); //division
    console.log("a%b=", a % b); //modulus (remainder)
    console.log("a**b=", a ** b); //exponentiation

    //Unary Operator
    a = a++;
    console.log("a++ =", a); //Increment
    a = a--;
    console.log("a-- =", a); //Decrement

}

{
    let x = 5;
    let y = 6;

    x += 4;
    // x *= 4;
    // x /= 4;
    // x -= 4;

    console.log("x =", x);
}

{
    //Comparison Operators
    let c = 5;
    let d = 4;

    console.log("5==2:", c == d);   //equasls to
    console.log("5 is not equal to 2:", c != d);   //Not equals to
    console.log("5 is not equal to 2(strictly):", c === d);  //It check the value as it is , not channge it for comparision
    console.log("5 > 2:", c > d);   //greater than
    console.log("5 < 2:", c < d);   //smaller than
}

{
    //Logical operators
    let c = 5;
    let d = 4;

    let cond1 = c > d;
    let cond2 = c === 5;
    console.log("cond1 && cond2", cond1 && cond2); //Logical AND 
    console.log("cond1 || cond2", cond1 || cond2); //Logical OR
    console.log("!(c>d)", !(c > d)); //Logical Not    
}

{
    //Conditionsl Statements
    //If statement
    let age = 25;
    let mode = 'dark';
    let color;
    if (age > 18) {
        console.log("you can vote");
    }

    if (age < 18) {
        console.log("you can't vote");
    }

    if (mode === "dark") {
        color = "black";
    }

    if (mode === "light") {
        color = "white";
    }

    console.log(color);

    //If-else statement
    if (mode === "dark") {
        color = "black";
    }
    else {
        color = "white";
    }
    console.log(color);

    let num = 10
    if (num % 2 === 0) {
        console.log(num, "is even");
    }
    else {
        console.log(num, "is odd");
    }

    //else-if statement
    if (age < 18) {
        console.log("junior");
    }
    else if (age > 60) {
        console.log("senior");
    }
    else {
        console.log("adult");
    }
}

{
    //Ternary Operators
    let age = 21;
    result = age > 18 ? "adult" : "not adult";
    console.log(result);
}


//Loops in Javascript
{
    //for loop
    for (let i = 1; i <= 5; i++) {
        console.log("apna college");
    }

    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum = sum + i;
    }
    console.log("sum =", sum)
}

{
    //Infinite Loop (Never do this in programming)
    // for (let i = 1; i >= 0; i++) {
    //     console.log("apna college");
    // }

}

{
    //While loop
    let i = 1;
    while (i <= 5) {
        console.log("i=", i);
        i++;
    }
}

{
    //Do-While Loop
    let i = 20;
    do {
        console.log("i=", i);
        i++;
    } while (i < 30);
}

{
    //for-of Loop  used for strings and arrays
    let str = "Shivam Jagtap";
    for (let i of str) { //iterator--> characters
        console.log(i);
    }

    let size = 0;
    for (let i of str) { //iterator--> characters
        console.log(i);
        size++;
    }
    console.log("string size is =", size);
}

{
    //for-in loops  used for objects

    let student = {
        name: "Shivam Jagtap",
        age: 21,
        cgpa: 7.5,
        isPass: true,
    };

    for (let key in student) {
        console.log("key is:", key, "value=", student[key]);
    }
}



//Strings in Javascript = Collection of characters

//Create a string
let str = "Shivam Jagtap";
let str2 = 'Shivam';

//String length
console.log(str.length);

//String indices
console.log(str[0]);


//Template Literals
let sentence = `This is a template literal`;
console.log(sentence);

let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`; //${obj.price} --> String interpolation
console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");

//Escape characters
console.log("Shivam \nJagtap"); // \n next line
console.log("Shivam\tJagtap"); // \t tab space

{
    //String Methods

    //str.toUpperCase()
    str = str.toUpperCase();
    console.log(str);

    //str.toLowerCase
    str2 = str.toLowerCase();
    console.log(str2);

    //str.trim()
    let str3 = `   Shivam Laxman Jagtap      `;
    str3 = str3.trim();
    console.log(str3);

    //str.slice() Give the specific part of the string that we want
    let str4 = `ShivamJagtap`;
    str4 = str4.slice(0, 4);
    console.log(str4);

    //str.concat() //Joins/merge strings to each other
    res = str.concat(str3);
    console.log(res);

    //str.replace(searchVal,newVal) replace values in string
    console.log(str4.replace("S", "C"));

    //str.charAt(idx) give the charcter at its index no.
    let str5 = "Shivam";
    console.log(str5.charAt(3));
}

{
    //Arrays in Javascript = Collection of Similar types of values
    let heroes = ["ironman", "thor", "hulk", "batman"];
    console.log(heroes);
    console.log(heroes.length);

    //Array indices
    console.log(heroes[0]);
    console.log(heroes[3]);
    console.log(heroes[4]); //when there is not any value at this index is will show undefined
    heroes[3] = "spiderman"; //String are immutable but array are mutable 
    console.log(heroes);

    //Looping over array
    for (let index = 0; index <= heroes.length; index++) {
        console.log(heroes[index]);
    }

    //for op
    for (let hero of heroes) {
        console.log(hero.toUpperCase());
    }


    //Push --> to add something at the array`s end
    let foodItems = ["potato", "apple", "banana", "tomato"];
    console.log(foodItems);
    foodItems.push("Mango");
    console.log(foodItems);

    //Pop --> used to delete from end and return
    let deletedItem = foodItems.pop();
    console.log(foodItems);
    console.log(deletedItem);

    //To string --> converts the array into string
    console.log(foodItems.toString());

    //Concat() --> joins multiple arrays and returns
    let marvel_heroes = ["thor", "spiderman", "hulk", "ironman", "dr strange", "wanda"];
    console.log(marvel_heroes);

    let dc_heroes = ["batman", "superman", "aquaman", "blackadam"];
    console.log(dc_heroes);

    let superHeroes = marvel_heroes.concat(dc_heroes);
    console.log(superHeroes);

    //unshift() to add value at the start of array
    marvel_heroes.unshift("Antman");
    console.log(marvel_heroes);

    //shift() to delete the value at the start of the array
    let val = marvel_heroes.shift("Antman");
    console.log("deleted:", val);
    console.log(marvel_heroes);

    //Slice --> returns a pece of the array
    console.log(marvel_heroes.slice(1, 3));
    console.log(marvel_heroes.slice(1));

    //Splice --> change original array(add,remove, replace)
    //Syntax --> splice(startidx, delCount, newEl1...)
    let arr = [1, 2, 3, 4, 5, 6, 7];

    console.log(arr.splice(1, 2, 10, 11));
    console.log(arr);

    console.log(arr.splice(2, 0, 101));
    console.log(arr);
}

{
    //Functions in Javascript
    //Ex console.log("Hello world"); --> here the log is the function that has already a work that it does

    function myFunction() {
        console.log("Welcome guys!");
        console.log("We are learning JS");
    }

    myFunction();

    function myFunction2(msg) { //parameter
        console.log(msg);
    }

    myFunction2("I love Js"); //argument

    //Let try to create a Function that is used to sum of 2 numbers
    //Sum funnction
    function sum(a, b) {
        //local variables
        let s = a + b;
        return s;
    }
    sum(5, 3);


    //Arrow functions
    //Modern sum function
    const arrowSum = (a, b) => {
        console.log(a + b);
    }

    const mul = (a, b) => {
        console.log(a * b);
    }

    const printHello = () => {
        console.log("Hello World");
    }
}

{
    //forEach loop in Arrays (higher order functions)
    //Ex str.toUpperCase() --> Here upperCase is a function but aslo amethod because it is used only for strings
    let arr = [1, 2, 3, 4, 5];
    arr.forEach(function printVal(val) { //each value at each index
        console.log(val);
    })

    let cities = ["pune", "delhi", "Mumbai"];
    cities.forEach((val, idx, arr) => {
        console.log(val.toUpperCase(), idx, arr);
    })
}