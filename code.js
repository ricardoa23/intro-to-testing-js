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
