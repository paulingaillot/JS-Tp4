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

function longestWord(words) {

    let max = 0;
    let result = "";
    for (let word of words) {
        if (word.length > max) {
            result = word;
            max = word.length;
        }
    }
    return result;
}

function range(min, max, step) {

    let tab = [];
    let value = min;
    for (let i = 0; i <= (max - min); i++) {
        tab[i] = value;
        value = value + step;
        if (value > max) return tab;
    }
    return tab;
}