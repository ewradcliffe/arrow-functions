/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/**
function addTwoNumbers(a, b) {
    return a + b
}

let sum = addTwoNumbers(9, 5);
console.log(sum); */
// Arrow Function With Parameters
/**
const addTwoNumbers = (a, b) => {
    return a + b
}

let sum = addTwoNumbers(9, 5);
console.log(sum);
*/
// Single Line Arrow Function With Parameters

const addTwoNumbers = (a, b) => a + b;

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Implicit Returns

const saySomething = message => console.log(message);

saySomething('Hello world!');

const sayHello = () => console.log('If you arent passing any function, use paraenthasis so js knows its a function. ');
sayHello()
// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is how you return multiple lines.
    </p>`
)

console.log(returnMultipleLines());