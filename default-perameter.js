// default perameter
function add(num1, num2 = 0) {
    /* console.log(num1, num2);
    if (num2 == undefined) {
        num2 = 0;
    } */
    console.log(num1, num2);
    const total = num1 + num2;
    return total;

}
//single perameter
const result = add(34);
console.log(result);