#! /usr/bin/env node
import axios from 'axios'
import { RawWeatherData } from './rawWeatherData.interface'
import parseWeatherData from './util/parseWeatherData'
import * as config from '../weather.config.json'
import { genOutput } from './util/genOutput'
import inquirer from 'inquirer'
import { writeFile } from 'fs'

const apiKey = config.OPEN_WEATHER_API_KEY
const API_RUL = 'https://api.openweathermap.org/data/2.5/'

if (process.argv[2] === ('--init' || '-i')) {
  const questions = [
    {
      type: 'input',
      name: 'apiKey',
      message: 'Enter your api Key:'
    },
    {
      type: 'list',
      name: 'units',
      message: 'choose a unit system:',
      choices: ['standard', 'metric', 'imperial']
    },
    {
      type: 'confirm',
      name: 'setFav',
      message: 'set a favourite city: ',
      default: true
    },
    {
      type: 'input',
      name: 'fav',
      message: 'enter a city name: ',
      when (answers: inquirer.Answers) {
        return !answers.setFavs
      }
    }
  ]

  inquirer.prompt(questions).then((answers) => {
    const config = `{
      "OPEN_WEATHER_API_KEY": "${answers.apiKey}",
      "FAV": "${answers.fav}",
      "UNIT": "${answers.units}"
    }`
    writeFile('weather.config.json', config, (err) => {
      if (err) throw err
      console.log('apiKeysaved')
    })
  }).catch(e => console.log(e))
} else {
  const city = process.argv[2] ?? 'giessen'

  axios.get<RawWeatherData>(
    `${API_RUL}weather?appid=${apiKey}&units=metric&lang=de&q=${city}`
  ).then(response => {
    console.log(genOutput(parseWeatherData(response.data)))
  }).catch(e => {
    console.log(JSON.stringify(e, null, 2))
  })
}
