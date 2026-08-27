
{
    let num = prompt("Enter a number:");
    console.log(num);

    if (num % 5 === 0) {
        console.log("Yes, the number is mmultiple by 5");
    }
    else {
        console.log("No.");
    }
}

{
    let score = 45;
    if (score >= 90 && score <= 100) {
        console.log("A grade");
    }
    else if (score >= 70 && score <= 89) {
        console.log("B grade");
    }
    else if (score >= 60 && score <= 69) {
        console.log("C grade");
    }
    else if (score >= 50 && score <= 59) {
        console.log("D grade");
    }
    else {
        console.log("Fail")
    }

}