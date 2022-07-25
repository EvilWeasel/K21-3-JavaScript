class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log(`The users name is ${user.name}`);
}

module.exports = { User, printName };
