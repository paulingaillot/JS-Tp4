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

function nbOccurences(wordList, word) {
    let words = wordList.split(" ");
    let occur = 0;
    for (let w of words) {
        if (w == word) occur++;
    }
    return occur;
}

function flatten2D(array) {

    let tab = [];
    let i = 0;
    for (let tab1 of array) {
        for (let value of tab1) {
            tab[i] = value;
            i++;
        }
    }
    return tab;

}

function exo6(tab) {

    console.log(tab.join(", "));
    tab.pop();
    tab.push("Paulin");
    console.log(tab.join(", "));
}

function exo7() {


    let tab = [];
    for (let i = 1; i < 10; i++) {
        let tab1 = [];
        for (let j = 1; j < 10; j++) {
            tab1[j] = i * j;
        }
        tab[i] = tab1;
    }

}

function cryptage(mess, dec) {

    mess = mess.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let val of mess) {
        let i = 0;
        while (val != alphabet[i]) {
            i++;
        }
        i = (i + dec) % 26;
        res = res + alphabet[i];
    }
    console.log(res);
}

function decryptage(mess, dec) {

    mess = mess.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    for (let val of mess) {
        let i = 0;
        while (val != alphabet[i]) {
            i++;
        }
        i = (i - dec);
        if (i < 0) i = i + 26;
        res = res + alphabet[i];
    }
    console.log(res);

}