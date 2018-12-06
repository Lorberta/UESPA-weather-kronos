const express = require('express');
const User = require('../models/User');
const router = express.Router();

const planets = "Bullshit";

router.get('/', (req, res, next) => {
  res.json(planets);
});

module.exports = router;
