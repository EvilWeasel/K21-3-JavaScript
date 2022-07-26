const express = require('express');
const router = express.Router();

// Import Person-Model
const Person = require('../models/person');

let person_list = new Array();

// GET: http://localhost:5000/person
// List<Person>
router.get('/', (req, res) => {
  let data = JSON.stringify(person_list);
  res.send(data);
});

// HTTP-Methods
/*
  - get    --> Daten abfragen
  - post   --> Request hat einen "Body"
  - put    --> Veränderungen an Daten auf dem Server ==> Hat wie POST einen Body!
  - delete --> Quasi wie ein POST
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

// Delete Person

module.exports = router;
