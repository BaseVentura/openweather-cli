#! /usr/bin/env node
import axios from 'axios'
import type { RawWeatherData } from './rawWeatherData.interface.js'
import parseWeatherData from './util/parseWeatherData.js'
import { printOutput } from './util/printOutput.js'
import Configstore from 'configstore'
import chalk from 'chalk'
import { init } from './util/init.js'

// const apiKey = config.OPEN_WEATHER_API_KEY
const API_RUL = 'https://api.openweathermap.org/data/2.5/'
const conf = new Configstore('openweather-cli')
const apiKey = conf.get('API_KEY')

if (process.argv[2] === '--init' || process.argv[2] === '-i') {
  init()
} else {
  if (!apiKey) {
    console.log(chalk.red('please initialize the tool via --init'))
    process.exit()
  }
  const city = process.argv[2] ?? conf.get('FAV') 

  if (!city) console.log(chalk.red('provide a city name or set a favourite'))


  axios.get<RawWeatherData>(
    `${API_RUL}weather?appid=${apiKey}&units=metric&lang=de&q=${city}`
  ).then(response => {
    printOutput(parseWeatherData(response.data))
  }).catch(e => {
    console.log(JSON.stringify(e, null, 2))
  })
}
