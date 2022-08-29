const mongoose = require("mongoose");

const currentMapperSchema = new mongoose.Schema({
    url: { type: String, required: true },
    key: { type: String, required: true },
    name: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, required: true },
    lat: { type: String, required: true },
    lon: { type: String, required: true },
    tz_id: { type: String, required: true },
    localtime_epoch: { type: String, required: true },
    localtime: { type: String, required: true },
});

const currentModel = mongoose.model("currentMapper", currentMapperSchema);

module.exports = currentModel;