import { WeatherData } from '../weatherData.interface'
import { RawWeatherData } from '../rawWeatherData.interface'
/* eslint-disable camelcase */
function parseWeatherData (rawData: RawWeatherData): WeatherData {
  const { name, main, weather } = rawData
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main
  const parsedData: WeatherData = {
    cityName: name,
    feelsLike: feels_like,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    weather: weather[0].description,
    clouds: rawData.clouds.all,
    wind: rawData.wind.speed
  }

  return parsedData
}
export default parseWeatherData
