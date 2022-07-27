const express = require('express');
const router = express.Router();

// Import Dogbreed-Model
const Dogbreed = require('../models/walliser.js')

// Import fs-helper
const { saveAllDogbreeds, loadAllDogbreeds } = require('../helper/fs_walliser')

let dogbreed_list = new Array();

dogbreed_list = loadAllDogbreeds();

// GET: http://localhost:5000/person
// List<Person>
router.get('/', (req, res) => {
  let data = JSON.stringify(dogbreed_list);
  res.status(200).send(data);
});

// HTTP-Methods
/*
  * CRUD => Create / Read / Update / Delete
  - Read:   GET    --> Daten abfragen
  - Create: POST   --> Request hat einen "Body"
  - Update: PUT    --> Veränderungen an Daten auf dem Server ==> Hat wie POST einen Body!
  - Delete: DELETE --> Quasi wie ein POST
*/

// POST: http://localhost:5000/person
// Create Person
router.post('/', (req, res) => {
  let p = new Dogbreed(
    dogbreed_list.length + 1,
    req.body.name,
    req.body.origin,
    req.body.ears,
    req.body.size,
    req.body.classification,
    req.body.eyes,
    req.body.character,
    req.body.color
  );
  dogbreed_list.push(p);
  saveAllDogbreeds(dogbreed_list)

  req.body === {} ? res.status(400) : res.status(200).send(p);
});

// Dogbreed by ID
/*
  GET: http://localhost:5000/person/1
  GET: http://localhost:5000/person/5
  GET: http://localhost:5000/person/10
*/
router.get('/:id', (req, res) => {
  let id = req.params.id
  let b = dogbreed_list.find(x => x.id == id)
  res.contentType = 'application/json'
  res.status(200).send(JSON.stringify(b))
})

// Change Dogbreed
// let id = req.body.id
// let b = new Dogbreed(req.body.Dogbreed.name)
router.put('/:id', (req, res) => {
  let id = req.params.id
  let b = dogbreed_list.find(x => x.id == id)
  console.log("Hunderasse vor Änderung", b)
  if (b !== undefined) res.status(404)
  b.name = req.body.name ?? b.name
  b.origin = req.body.origin ?? b.origin
  b.ears = req.body.ears ?? b.ears
  b.size = req.body.size ?? b.size
  b.classification = req.body.classification ?? b.classification
  b.eyes = req.body.eyes ?? b.eyes
  b.character = req.body.character ?? b.character
  b.color = req.body.color ?? b.color
  
  saveAllDogbreeds(dogbreed_list)
  res.status(200).send(JSON.stringify(b))
})


// DELETE: http://localhost:5000/person/1
// Delete Dogbreed
router.delete('/:id', (req, res) => {
  let id = req.params.id
  let b = dogbreed_list.find(b => b.id == id)
  dogbreed_list.splice(dogbreed_list.indexOf(b), 1)
  saveAllDogbreeds(dogbreed_list)
  res.status(200).send(b)
})

module.exports = router;