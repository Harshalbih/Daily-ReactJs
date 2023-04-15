// sum of its own digits each raised to the power of the number of digits
//Armstrong number
const isArmstrong = (num) => {
    let originalNum = num;
    let numOfDigits = num.toString().length;
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, numOfDigits);
        num = Math.floor(num / 10);
    }
    return originalNum === sum;
};