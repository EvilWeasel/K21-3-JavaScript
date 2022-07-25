const express = require('express');
const router = express.Router();

const Person = require('../models/person');

let person_list = new Array();

// Index-Route: Liste<Person>
router.get('/', (req, res) => {
  let data = JSON.stringify(person_list);
  res.send(data);
});

// HTTP-Methods
/*
  - get  --> Daten abfragen
  - post --> Request hat einen "Body"
  - put
  - delete
*/

// Create Person
router.post('/', (req, res) => {
  //console.log(req.body);
  let p = new Person(
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

// Change Person

// Delete Person

module.exports = router;
