// arguments object - no longer bound with arrow functions

const add =(a, b) => {
    // console.log(arguments) -- this would no longer work
    return a + b
}

console.log(add(55, 1))

// this keyword - no longer bound

const user = {
    name: 'Luis',
    cities: ['California', 'Oregon', 'Washington'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())