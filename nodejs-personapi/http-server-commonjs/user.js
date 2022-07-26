class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log(`The users name is ${user.name}`);
}

function printHowIWant(delegate) {
  delegate(obj)
}

module.exports = { User, printName };

printHowIWant(function(obj) {
  console.log(obj)
})