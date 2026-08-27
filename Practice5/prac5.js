{
    let student_marks = [85, 97, 44, 37, 76, 60];
    console.log(student_marks);

    let sum = 0;
    for (let val of student_marks) {
        console.log(val);
        sum += val;

    }
    let avg = sum / student_marks.length;
    console.log(avg);

}

{
    let items = [250, 645, 300, 900, 50];
    console.log(items);

    let i = 0;
    for (let val of items) {
        let offer = val / 10;
        items[i] = items[i] - offer;
        console.log(`value after offer =${items[i]}`)
        i++;
    }

}