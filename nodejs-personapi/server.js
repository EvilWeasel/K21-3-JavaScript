const PORT = 5000;
const express = require('express');
//const bodyParser = require('body-parser');

const r_index = require('./routes/r_index');
const r_person = require('./routes/r_person');
const r_walliser = require('./routes/r_walliser')

const app = express();

// Setup Body-Parsing
// MiddleWare => Code, der bei jedem Aufruf des Servers ausgeführt wird, bevor der Router-Code ausgeführt wird
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Setup Routers
// Index => http://localhost:5000/
// Person => http://localhost:5000/person
app.use('/', r_index);
app.use('/person', r_person);
app.use('/walliser', r_walliser)

app.listen(PORT, () => {
  console.log(`Http-Server listening on port ${PORT}`);
});
