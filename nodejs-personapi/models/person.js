// Schreiben Sie ein Personen-Modul
/*
  Eine Person hat:
  - vorname
  - nachname
  - alter
  - email-adresse
  - strasse
  - hausnummer
  - plz
  - ort
*/
class Person {
  constructor(id, firstName, lastName, age, mail, street, number, postal, city) {
    this.id = id
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.age = age;
    this.street = street;
    this.number = number;
    this.postal = postal;
    this.city = city;
  }
}
//function printName(user) {
//    console.log(`${user.firstName}, ${user.lastName}`)
//}
module.exports = Person;
