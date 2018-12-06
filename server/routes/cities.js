const express = require('express');
const User = require('../models/User');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const axios = require('axios')

const cities = {
  "bar-or-lhess": { //northern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033883/Kronos/barorlhess.jpg',
    name: "Bar'or Lhess",
    owid: 6453366
  },
  "first-city": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1543941568/Kronos/firstcity.jpg',
    name: "First City",
    owid: 217831
  },
  "ha-r-kling-jaa": { //northern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033982/Kronos/harklingjaa.jpg',
    name: "Ha'r Kling Jaa",
    owid: 6453366
  },
  "h-vek-tar": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033906/Kronos/hvektar.jpg',
    name: "H'Vek Tar",
    owid: 5854686
  },
  "kl-alath": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033981/Kronos/klalath.jpg',
    name: "Kl'alath",
    owid: 3899539
  },
  "l-chorta": { //northern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033890/Kronos/lchorta.jpg',
    name: "L'chorta",
    owid: 3865086
  },
  "lhess-taal-dax": { //northern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033856/Kronos/lhesstaaldax.jpg',
    name: "Lhess Taal Dax",
    owid: 1496747
  },
  "l-vln-lak-raal": { //northern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033838/Kronos/lvlnlakraal.jpg',
    name: "L'vln Lak Raal",
    owid: 5550452
  },
  "lyn-knor-tak": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033981/Kronos/lynknortak.jpg',
    name: "Lyn'Knor Tak",
    owid: 202068
  },
  "mor-em-cha": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033799/Kronos/moremcha.jpg',
    name: "Mor'em Cha",
    owid: 216281
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
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033981/Kronos/tvalkrang.jpg',
    name: "T'Val K'rang",
    owid: 4901390
  },
  "v-hechess": { //southern hemisphere
    imgUrl: 'https://res.cloudinary.com/lorberta/image/upload/v1544033982/Kronos/vhechess.jpg',
    name: "V'hechess",
    owid: 3143244
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
