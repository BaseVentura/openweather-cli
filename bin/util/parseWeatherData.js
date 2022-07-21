"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
function parseWeatherData(rawData) {
    const { name, main, weather, dt } = rawData;
    const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
    const parsedData = {
        cityName: name,
        feelsLike: feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
        weather: weather[0].description,
        time: new Date(dt).toLocaleDateString('de')
    };
    return parsedData;
}
exports.default = parseWeatherData;
