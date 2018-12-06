const express = require('express');
const User = require('../models/User');
const router = express.Router();

const systems = "Bullshit";

router.get('/', (req, res, next) => {
  res.json(systems);
});

module.exports = router;
