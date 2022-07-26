const express = require('express');
const router = express.Router();
const path = require('path');

// GET: Index => http://localhost:5000/
router.get('/', (req, res) => {
  res.send('Hallo Welt!');
  console.log(__dirname);
});

// GET: Test => http://localhost:5000/test
router.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '/test.html'));
});

module.exports = router;
