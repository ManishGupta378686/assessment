const express = require('express');
const router = express.Router();
const currentCtrl = require('../controllers/currentCtrl');
const forecastCtrl = require('../controllers/forecastCtrl');

router.get('/current.weather', currentCtrl.getCurrentWeather);
router.get('/forecast.weather', forecastCtrl.getForecastWeather);

module.exports = router;