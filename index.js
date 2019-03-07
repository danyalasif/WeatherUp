const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

const apiKey = process.env.WEATHERAPIKEY;
let baseURL = `http://api.openweathermap.org/data/2.5/weather?`;

let getWeatherData = city =>
    axios
        .get(baseURL, {
            params: { q: city, appid: apiKey, units: "imperial" }
        })
        .then(data => data.data.main);

app.get("/", (req, res) => {});

app.get("/weather/city/:city", (req, res) => {
    let city = req.params.city;
    getWeatherData(city)
        .then(data => {
            console.log(data);
            res.status(200).json({ current_temp_f: data.temp, location: city });
        })
        .catch(err => {
            console.error(err);
            res.status(404).json({ error: "Invalid location" });
        });
});

app.get("/*", (req, res) => {
    res.send("Try entering /weather/city/{cityname} to get temperature. :)");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});
