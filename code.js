// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }

// function sayHello(input) {
//     if (input === undefined) {
//         return 'Hello, World!';
//     } else if (input === true) {
//         return 'Hello, World!';
//     } else if (input === false) {
//         return 'Hello, World!';
//     } else {
//         return `Hello, ${input}!`
//     }
// }

function sayHello(input) {
    return (typeof input === 'string') ? `Hello, ${input}!` : 'Hello, World!';
}

function isFive(num) {
    return parseInt(num) === 5;
}
// console.log(isFive('5'))

function isEven(num) {
    return parseFloat(num) % 2 === 0;
}
// console.log(isEven(true))


//isVowel
function isVowel(input) {
    if (typeof (input) === 'string') {
        input = input.toLowerCase()
        console.log(`prior conditional ${input}`);
        let result = (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') ? true : false;
        return result;
    } else {
        return false;
    }
}
isVowel('A')
console.log(isVowel('A'))