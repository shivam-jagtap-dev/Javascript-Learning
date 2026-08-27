
//Question 1 
//Create a function usingg the "function" keyword that takes a String as a argument & returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    console.log(`There are ${count} in ${str} `);
    return count;
}

//Question 2
//Create a arrow function to perform same task

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    return count;
}