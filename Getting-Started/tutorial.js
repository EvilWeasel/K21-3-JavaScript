console.log("Hello JavaScript!")


/* VARIABLES */
// legacy support, don't use!!!
name = "Dennis"
var middleName = "Fritz" 
// means...
window.name = "Dennis"

// variable declaration and initialization
let age
age = 10
let lastName = "Maier"
// constant variable assignment
const PI = 3.141592
const E = 2.71828
const TEXT = "MOIN"
const BLA = [PI]
BLA.push(E)
console.log(BLA)
BLA[0] = 10
console.log(BLA)
// PI = 5
console.log(PI)

/* DataTypes */
// Numbers
// 2^-1074 to 2^1024
let num1 = 10
let num2 = 22.456

let massiveNumber = BigInt(Number.MAX_SAFE_INTEGER)
console.log(massiveNumber)

// Strings
// type inference
let string1 = "ABCDEF"
// console.log(string1)
// string1 = 1
// console.log(string1)
console.log(string1[0])
string1 = string1 + "GHIJK"
console.log(string1)
// both examples below are strings, no chars like in C#
let char = 'A'
let char2 = "A"


// Boolean
let bool1 = true
// when bool1 is false, it returns true, else it returns false
bool1 = false ? 1 : "false"
console.log(bool1)


/* Error-Types / Eigene Definition */
// Null
// c#-context: public string? name => nullable
// Variable "abc" has no pointer to a value in memory
const abc = null
console.log(abc)
console.log(typeof(abc))

// Undefined
// example: declaring a variable and accessing it, before initialization
let data
console.log(data)
// data.execCommand()

// NaN => Not a Number
console.log(undefined + 10)
let userInputNumber
console.log(userInputNumber * 20)

/* Objects */
let person1 = {
    name: "Herbert",
    nachname: "Mueller",
    alter: 42, 
    verheiratet: true, 
    children: [
        {
            name: "Alf",
            alter: 12
        },
        {
            name: "Steffi",
            alter: 6
        }
    ]
}
console.log(person1)
console.log(person1.children.length)
console.log(person1.children[0].name)
// console.log(person1.children[2].alter)