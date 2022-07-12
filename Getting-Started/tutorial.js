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

