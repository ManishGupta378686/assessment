const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();
const weatherRouter = require('./routes/weatherRoute');
const connectDB = require('./db/db.js');

connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/weather', weatherRouter);

app.listen(process.env.PORT, () => {
    console.log(`server is running at port ${process.env.PORT}`);
})
