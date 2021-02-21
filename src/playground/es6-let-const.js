// ES5: Can redefine and reassign: 
var nameVar = 'Luis'
var nameVar = 'Mike'
console.log('namevar', nameVar)

// ES6:

// Can't redefine:
let nameLet = 'Jen';
nameLet = 'Julie'
console.log(nameLet)

// Can't be reassigned:
const nameConst = 'Frank'
console.log('nameConst', nameConst)

// They are all function scoped:
function getPetName() {
    let petName = 'Hal'
    return petName
}

// Here can be used outside of the 
// function bc it was defined outside:
const petName = getPetName()
console.log(petName)

// Block Scoping:

var fullName = 'Luis Garcia'

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(fistName)
}

// firstName is available bc the if was not a function
// const and let are block scoped 
// but var is function scoped
console.log(firstName)