function add(num1, num2) {
    //const sum = num1 + num2;
    return num1 + num2;
}


//function expression (Anonymous)
const add2 = function (num1, num2) {
    return num1 + num2;
}

//arrow function
const add3 = (num1, num2) => num1 + num2;

const sum1 = add(5, 17);
const sum2 = add2(5, 17)
const sum3 = add2(5, 17)
console.log(sum1, sum2, sum3);