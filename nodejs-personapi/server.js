const PORT = 5000;
const express = require('express');
const r_index = require('./routes/r_index');

const app = express();

// Setup Routers
app.use('/', r_index);

app.listen(PORT, () => {
  console.log(`Http-Server listening on port ${PORT}`);
});
