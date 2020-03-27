function sum(numbers) {

    let result = 0;
    for (let number of numbers) {
        result = result + number;
    }
    return result;
}

function sumc(numbers) {

    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    return result;
}