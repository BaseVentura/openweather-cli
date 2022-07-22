#! /usr/bin/env node
import axios from 'axios'
import { RawWeatherData } from './rawWeatherData.interface'
import parseWeatherData from './util/parseWeatherData'
import { genOutput } from './util/genOutput'
import Conf from 'conf'
import { init } from './util/init'
import chalk from 'chalk'

// const apiKey = config.OPEN_WEATHER_API_KEY
const API_RUL = 'https://api.openweathermap.org/data/2.5/'
const conf = new Conf()
const apiKey = conf.get('API_KEY')



if (process.argv[2] === ('--init' || '-i')) {
  init()
} else {
  if (!apiKey) {
    console.log(chalk.red('please initialize the tool via --init'))
    process.exit()
  }
  const city = conf.get('FAV') ?? process.argv[2]

  if (!city) console.log(chalk.red('provide a city name or set a favourite'))

  axios.get<RawWeatherData>(
    `${API_RUL}weather?appid=${apiKey}&units=metric&lang=de&q=${city}`
  ).then(response => {
    console.log(genOutput(parseWeatherData(response.data)))
  }).catch(e => {
    console.log(JSON.stringify(e, null, 2))
  })
}
