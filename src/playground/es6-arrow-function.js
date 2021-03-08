// ES5:
const square = function(x) {
    return x * x
}

console.log(square(8))


// ES6: 

// All arrow functions are anonymous: 

// const squareArrow = (x) => {
//     return x * x
// }

// If the arrow function and only returns a single expresion, 
// then we don't explicitly have to use 'return':
const squareArrow = (x) => x * x;

console.log(squareArrow(9))

// Arrow function to return firstName:

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('luis garcia'))