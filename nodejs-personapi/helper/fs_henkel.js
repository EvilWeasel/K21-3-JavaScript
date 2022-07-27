const fs = require('fs');
const path = require('path')

function saveAllWeather(weather_list) {
  let data = JSON.stringify(weather_list, null, 2)
  fs.writeFile(path.join(__dirname, '../data/weather_list.json'), data, (err) => {
    if (err) throw err;
    console.log("Data written to disk!")
  })
}

function loadAllWeather() {
  let data = fs.readFileSync(path.join(__dirname, '../data/weather_list.json'))
  return JSON.parse(data)
}

module.exports = { saveAllWeather, loadAllWeather }