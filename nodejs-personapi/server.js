const PORT = 5000;
const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors')

const r_index = require('./routes/r_index');
const r_person = require('./routes/r_person');
const r_henkel = require('./routes/r_henkel');
const r_wehrle_wetter = require('./routes/r_wehrle_wetter');
const r_walliser = require('./routes/r_walliser')

const app = express();
app.use(cors())

// Setup Body-Parsing
// MiddleWare => Code, der bei jedem Aufruf des Servers ausgeführt wird, bevor der Router-Code ausgeführt wird
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Setup Routers
// Index => http://localhost:5000/
// Person => http://localhost:5000/person
// Weather => http://localhost:5000/weather
app.use('/', r_index);
app.use('/person', r_person);
app.use('/weather', r_henkel);
app.use('/wehrle', r_wehrle_wetter)
app.use('/walliser', r_walliser)

app.listen(PORT, () => {
  console.log(`Http-Server listening on port ${PORT}`);
});
