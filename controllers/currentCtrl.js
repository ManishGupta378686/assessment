const currentModel = require('../models/currentModel');
const axios = require('axios');

let mapper = {
    name: "town",
    region: "state",
    country: "nation",
    lat: "latitude",
    lon: "longitude",
    tz_id: "Time Zone",
    localtime_epoch: "localtime_epoch",
    location: "Time",
}

module.exports = {
    getCurrentWeather: async (req, res) => {
        try {
            let newObj = {}
            let { city, aqi } = req.query;
            let url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=${aqi}`;
            let response = await axios.get(url)
            let oldObj = response.data.location;
            oldObj.url = url;
            oldObj.key = process.env.API_KEY;
            let doc = new currentModel(oldObj);
            await doc.save();
            for (let i in mapper) {
                newObj[mapper[i]] = oldObj[i];
            }
            newObj.url = url;
            newObj.key = process.env.API_KEY;
            return res.json({ success: 'true', response: newObj });
        } catch (e) {
            res.send(e);
        }
    }
}