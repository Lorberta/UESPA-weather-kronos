const express = require('express');
const User = require('../models/User');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const axios = require('axios')

const cities = {
  "bar-or-lhess": { //northern hemisphere
    // _id: 'Tssl',
    // img: '../../client/src/images/firstcity',  PATH????????????????????????
    name: "Bar'or Lhess",
    // slug: 'kronos',
    owid: 6453366
  },
  "first-city": { //southern hemisphere
    img: '',
    name: "First City",
    owid: 6453366
  },
  "ha-r-kling-jaa": { //northern hemisphere
    img: '',
    name: "Ha'r Kling Jaa",
    owid: 6453366
  },
  "h-vek-tar": { //southern hemisphere
    img: '',
    name: "H'Vek Tar",
    owid: 6453366
  },
  "kl-alath": { //southern hemisphere
    img: '',
    name: "Kl'alath",
    owid: 6453366
  },
  "l-chorta": { //northern hemisphere
    img: '',
    name: "L'chorta",
    owid: 6453366
  },
  "lhess-taal-dax": { //northern hemisphere
    img: '',
    name: "Lhess Taal Dax",
    owid: 6453366
  },
  "l-vln-lak-raal": { //northern hemisphere
    img: '',
    name: "L'vln Lak Raal",
    owid: 6453366
  },
  "lyn-knor-tak": { //southern hemisphere
    img: '',
    name: "Lyn'Knor Tak",
    owid: 6453366
  },
  "mor-em-cha": { //southern hemisphere
    img: '',
    name: "Mor'em Cha",
    owid: 6453366
  },
  // "qam-chee": { //ancient city
  //   img: '',
  //   name: "Qam-Chee",
  //   owid: 6453366
  // },
  // "quin-lat": { //ancient city
  //   img: '',
  //   name: "Quin'lat",
  //   owid: 6453366
  // },
  // "tong-vey": { //ancient city
  //   img: '',
  //   name: "Tong Vey",
  //   owid: 6453366
  // },
  "t-val-k-rang": { //southern hemisphere
    img: '',
    name: "T'Val K'rang",
    owid: 6453366
  },
  "v-hechess": { //southern hemisphere
    img: '',
    name: "V'hechess",
    owid: 6453366
  },
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
