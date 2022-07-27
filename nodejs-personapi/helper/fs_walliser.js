const fs = require('fs');
const path = require('path')

function saveAllDogbreeds(dogbreed_list) {
  let data = JSON.stringify(dogbreed_list, null, 2)
  fs.writeFile(path.join(__dirname, '../data/dogbreed_list.json'), data, (err) => {
    if (err) throw err;
    console.log("Data written to disk!")
  })
}

function loadAllDogbreeds() {
  let data = fs.readFileSync(path.join(__dirname, '../data/dogbreed_list.json'))
  return JSON.parse(data)
}

module.exports = { saveAllDogbreeds, loadAllDogbreeds }