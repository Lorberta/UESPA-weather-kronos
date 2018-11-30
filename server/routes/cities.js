const express = require('express');
const User = require('../models/User');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const axios = require('axios')

const cities = {
  "Kronos1": {
    // _id: 'Tssl',
    img: '',
    name: "Ko'nos",
    // slug: 'kronos',
    owid: 6453366
  },
  'Kronos2': {
    // _id: 'Tssl2',
    img: '',
    name: "Ko'nos2",
    // slug: 'kronos2',
    owid: 6453366
  }
};

router.get('/', (req, res, next) => {
  res.json(cities);
});

router.get('/:slug/weather', (req, res, next) => {

  var slug = req.params.slug;
  var city = cities[slug];

  var api_key = process.env.OPENWEATHERMAP_API_KEY;
  url = `http://api.openweathermap.org/data/2.5/weather?id=${city.owid}&?units=metric&APPID=${api_key}`

  axios.get(url)
    .then(response => {
      console.log(response.data);
      res.json(response.data)
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
