const express = require('express');
const router = express.Router();

// Import Weather-Model
const Weather = require('../models/henkel');

// Import fs-helper
//const { saveAllWeather, loadAllWeather } = require('../helper/fs_henkel')

let weather_list = new Array();

//weather_list = loadAllWeather();

// GET: http://localhost:5000/weather
// List<Weather>
router.get('/', (req, res) => {
  let data = JSON.stringify(weather_list);
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

// POST: http://localhost:5000/weather
// Create Weather
router.post('/', (req, res) => {
  let w = new Weather(
    weather_list.length + 1,
    req.body.temperature,
    req.body.amountOfRain,
    req.body.amountOfSun
  );
  weather_list.push(w);
  //saveAllWeather(weather_list)

  req.body === {} ? res.status(400) : res.status(200).send(w);
});

// Weather by day
/*
  GET: http://localhost:5000/weather/1
  GET: http://localhost:5000/weather/5
  GET: http://localhost:5000/weather/10
*/
router.get('/:day', (req, res) => {
  let day = req.params.day
  let w = weather_list.find(x => x.day == day)
  res.contentType = 'application/json'
  res.status(200).send(JSON.stringify(w))
})

// Change Weather
// let day = req.body.day
// let w = new Weather(req.body.Weather.temperature)
router.put('/:day', (req, res) => {
  let day = req.params.day
  let w = weather_list.find(x => x.day == day)
  console.log("Weather vor Änderung", w)
  if (w !== undefined) res.status(404)
  w.temperature = req.body.temperature ?? w.temperature
  w.amountOfRain = req.body.amountOfRain ?? w.amountOfRain
  w.amountOfSun = req.body.amountOfSun ?? w.amountOfSun
  
  //saveAllWeather(weather_list)
  res.status(200).send(JSON.stringify(w))
})


// DELETE: http://localhost:5000/weather/1
// Delete Weather
router.delete('/:day', (req, res) => {
  let day = req.params.day
  let w = weather_list.find(w => w.day == day)
  weather_list.splice(weather_list.indexOf(w), 1)
  //saveAllWeather(weather_list)
  res.status(200).send(w)
})

module.exports = router;