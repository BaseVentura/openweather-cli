#! /usr/bin/env node
import axios from 'axios'
import { RawWeatherData } from './rawWeatherData.interface'
import parseWeatherData from './util/parseWeatherData'
import * as config from './weather.config.json'
import { genOutput } from './util/genOutput'

const apiKey = config.OPEN_WEATHER_API_KEY
const API_RUL = 'https://api.openweathermap.org/data/2.5/'
const city = process.argv[2] ?? 'giessen'

axios.get<RawWeatherData>(
  `${API_RUL}weather?appid=${apiKey}&units=metric&lang=de&q=${city}`
).then(response => {
  console.log(genOutput(parseWeatherData(response.data)))
}).catch(e => {
  console.log(JSON.stringify(e,null,2))
})
