/* eslint-disable camelcase */
import { WeatherData } from '../weatherData.interface'
import chalk from 'chalk'

export const printOutput = (data: WeatherData) => {
  const { cityName, humidity, clouds, wind, temp } = data
  console.log(' ')
  console.log(chalk.bold.green(cityName) + '\n')
  console.log(`Temperature: ${temp}`)
  console.log('---------------')
  console.log(`Humidity: ${humidity} %`)
  console.log(`Cloudiness: ${clouds} %`)
  console.log(`Wind speed: ${wind} km/h`)
}
