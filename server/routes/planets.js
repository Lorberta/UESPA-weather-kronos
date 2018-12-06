const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(planets);
});

module.exports = router;
