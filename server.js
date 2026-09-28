const express = require("express");

const app = express();

const PORT = 5000;

app.get("/api/health", (req, res) => {
    res.json({
        message: "weather api is running on port 5000"
    });
});
app.get("/api/location", async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({
                message: "City is required"
            });
        }

        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;

        const response = await fetch(url);

        const data = await response.json();

        res.json(data);

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
app.get("/api/weather", async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({
                message: "City is required"
            });
        }

        // Step 1: Find city coordinates
        const locationUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;

        const locationResponse = await fetch(locationUrl);
        const locationData = await locationResponse.json();

        if (!locationData.results) {
            return res.status(404).json({
                message: "City not found"
            });
        }

        const location = locationData.results[0];

        // Step 2: Get weather using coordinates
        const weatherUrl =
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // Step 3: Send clean response
        res.json({
            city: location.name,
            country: location.country,
            temperature: weatherData.current.temperature_2m,
            humidity: weatherData.current.relative_humidity_2m,
            windSpeed: weatherData.current.wind_speed_10m,
            weatherCode: weatherData.current.weather_code
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});