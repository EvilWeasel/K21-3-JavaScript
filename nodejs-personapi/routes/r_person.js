const express = require('express');
const router = express.Router();

// Import Person-Model
const Person = require('../models/person');

let person_list = new Array();

// GET: http://localhost:5000/person
// List<Person>
router.get('/', (req, res) => {
  let data = JSON.stringify(person_list);
  res.status(200).send(data);
});

// HTTP-Methods
/*
  - GET    --> Daten abfragen
  - POST   --> Request hat einen "Body"
  - PUT    --> Veränderungen an Daten auf dem Server ==> Hat wie POST einen Body!
  - DELETE --> Quasi wie ein POST
*/

// POST: http://localhost:5000/person
// Create Person
router.post('/', (req, res) => {
  //console.log(req.body);
  let p = new Person(
    person_list.length + 1,
    req.body.firstName,
    req.body.lastName,
    req.body.age,
    req.body.mail,
    req.body.street,
    req.body.number,
    req.body.postal,
    req.body.city
  );
  person_list.push(p);

  console.log(person_list);
  req.body === {} ? res.status(400) : res.status(200).send(p);
});

// Person by ID
/*
  GET: http://localhost:5000/person/1
  GET: http://localhost:5000/person/5
  GET: http://localhost:5000/person/10
*/
router.get('/:id', (req, res) => {
  let id = req.params.id
  let p = person_list.find(x => x.id == id)
  res.contentType = 'application/json'
  res.status(200).send(JSON.stringify(p))
})

// Change Person
// let id = req.body.id
// let p = new Person(req.body.Person.firstName)
router.put('/:id', (req, res) => {
  let id = req.params.id
  let p = person_list.find(x => x.id == id)
  console.log("Person vor Änderung",p)
  if (p !== undefined) res.status(404)
  p.firstName = req.body.firstName ?? p.firstName
  p.lastName = req.body.lastName ?? p.lastName
  p.age = req.body.age ?? p.age
  p.mail = req.body.mail ?? p.mail
  p.street = req.body.street ?? p.street
  p.number = req.body.number ?? p.number
  p.postal = req.body.postal ?? p.postal
  p.city = req.body.city ?? p.city
  
  console.log("Person nach Änderung",p)
  res.status(200).send(JSON.stringify(p))
})


// DELETE: http://localhost:5000/person/1
// Delete Person
router.delete('/:id', (req, res) => {
  let id = req.params.id
  let p = person_list.find(p => p.id == id)
  person_list.splice(person_list.indexOf(p), 1)
  res.status(200).send(p)
})

module.exports = router;

// class myarry {

//   function myindexof(obj) {
//     for each elem in myarry{
//       if obj === elem return elem
//     }
//   }
//   function myfind(myfunction){
//     for each elem in myarry {
//       let mybool = myfunction(elem)
//       if (mybool) 
//     }
//   }
// }