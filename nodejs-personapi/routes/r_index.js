const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.send('Hallo Welt!');
  console.log(__dirname);
});

router.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '/test.html'));
});

module.exports = router;
