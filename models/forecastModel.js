const mongoose = require("mongoose");

const forecastSchema = new mongoose.Schema({
    url: { type: String, required: true },
    key: { type: String, required: true },
    sunrise: { type: String, required: true },
    sunset: { type: String, required: true },
    moonrise: { type: String, required: true },
    moonset: { type: String, required: true },
    moon_phase: { type: String, required: true },
    moon_illumination: { type: String, required: true },
});

const forecastModel = mongoose.model("forecast", forecastSchema);

module.exports = forecastModel;