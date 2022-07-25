class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log(`The users name is ${user.name}`);
}

function printAge(user) {
  console.log(`The users age is ${user.age}`);
}

export default User;
export { printName, printAge };
