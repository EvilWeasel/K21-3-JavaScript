const fs = require('fs');
const path = require('path')

function saveAllPersons(person_list) {
  let data = JSON.stringify(person_list, null, 2)
  fs.writeFile(path.join(__dirname, '../data/person_list.json'), data, (err) => {
    if (err) throw err;
    console.log("Data written to disk!")
  })
}

function loadAllPersons() {
  let data = fs.readFileSync(path.join(__dirname, '../data/person_list.json'))
  return JSON.parse(data)
}

module.exports = { saveAllPersons, loadAllPersons }