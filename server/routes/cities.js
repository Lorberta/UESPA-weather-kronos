const express = require('express');
const User = require('../models/User');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const axios = require('axios')

const cities = {
  "bar-or-lhess": { //northern hemisphere
    // _id: 'Tssl',
    imgUrl: '',
    name: "Bar'or Lhess",
    // slug: 'kronos',
    owid: 6453366
  },
  "first-city": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1543941568/Kronos/firstCity.jpg',
    name: "First City",
    owid: 6453366
  },
  "ha-r-kling-jaa": { //northern hemisphere
    imgUrl: '',
    name: "Ha'r Kling Jaa",
    owid: 6453366
  },
  "h-vek-tar": { //southern hemisphere
    imgUrl: '',
    name: "H'Vek Tar",
    owid: 6453366
  },
  "kl-alath": { //southern hemisphere
    imgUrl: '',
    name: "Kl'alath",
    owid: 6453366
  },
  "l-chorta": { //northern hemisphere
    imgUrl: '',
    name: "L'chorta",
    owid: 6453366
  },
  "lhess-taal-dax": { //northern hemisphere
    imgUrl: '',
    name: "Lhess Taal Dax",
    owid: 6453366
  },
  "l-vln-lak-raal": { //northern hemisphere
    imgUrl: '',
    name: "L'vln Lak Raal",
    owid: 6453366
  },
  "lyn-knor-tak": { //southern hemisphere
    imgUrl: '',
    name: "Lyn'Knor Tak",
    owid: 6453366
  },
  "mor-em-cha": { //southern hemisphere
    imgUrl: '',
    name: "Mor'em Cha",
    owid: 6453366
  },
  // "qam-chee": { //ancient city
  //   imgUrl: '',
  //   name: "Qam-Chee",
  //   owid: 6453366
  // },
  // "quin-lat": { //ancient city
  //   imgUrl: '',
  //   name: "Quin'lat",
  //   owid: 6453366
  // },
  // "tong-vey": { //ancient city
  //   imgUrl: '',
  //   name: "Tong Vey",
  //   owid: 6453366
  // },
  "t-val-k-rang": { //southern hemisphere
    imgUrl: '',
    name: "T'Val K'rang",
    owid: 6453366
  },
  "v-hechess": { //southern hemisphere
    imgUrl: '',
    name: "V'hechess",
    owid: 6453366
  },
};

//Returns all available cities
router.get('/', (req, res, next) => {
  res.json(cities);
});

router.get('/:slug/weather', (req, res, next) => {

  var slug = req.params.slug;
  var city = cities[slug];

  var api_key = process.env.OPENWEATHERMAP_API_KEY;
  url = `http://api.openweathermap.org/data/2.5/weather?id=${city.owid}&APPID=${api_key}&units=metric`

  axios.get(url)
    .then(response => {
      console.log(response.data);
      res.json(response.data)
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/:slug/forecast', (req, res, next) => {

  var slug = req.params.slug;
  var city = cities[slug];

  var api_key = process.env.OPENWEATHERMAP_API_KEY;
  url = `http://api.openweathermap.org/data/2.5/forecast?id=${city.owid}&APPID=${api_key}&units=metric`

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
