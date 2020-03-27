function test1() {
    console.log(sum([])); // => 0
    console.log(sum([42, 404, 1337])); // => 1783
}

function test12() {
    console.log(sumc([])); // => 0
    console.log(sumc([42, 404, 1337])); // => 1783
}

function test2() {

    console.log(longestWord(["lot", "of", "words", "of", "different", "sizes"])); // => different 

}

function tabTest() {
    test1();
    test12();
    test2();

}