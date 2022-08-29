const forecastModel = require('../models/forecastModel');
const axios = require('axios');
let mapper = {
    sunrise: "Dawn",
    sunset: "Dusk",
    moonrise: "moon lit",
    moonset: "moon sleep",
    moon_phase: "orientation",
    moon_illumination: "illumination"
}

module.exports = {
    getForecastWeather: async (req, res) => {
        try {
            let { city, days, aqi, alerts } = req.query;
            let url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`;
            let response = await axios.get(url)
            let forecastArr = response.data.forecast.forecastday;
            let Arr = [];
            for (let item of forecastArr) {
                let newObj = {};
                let oldObj = item.astro;
                oldObj.url = url;
                oldObj.key = process.env.API_KEY;
                let doc = new forecastModel(oldObj);
                await doc.save();
                for (let i in mapper) {
                    newObj[mapper[i]] = oldObj[i];
                }
                newObj.url = url;
                newObj.key = process.env.API_KEY;
                Arr.push(newObj);
            }
            return res.json({ success: 'true', response: Arr });
        } catch (e) {
            res.send(e);
        }
    }
}