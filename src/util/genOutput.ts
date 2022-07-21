/* eslint-disable camelcase */
import { WeatherData } from '../weatherData.interface'
import chalk from 'chalk'

export const genOutput = (data: WeatherData) => {
  const { cityName, temp_min, temp_max, weather } = data
  const output = `\nWetter in ${chalk.cyan(cityName)}: ${weather} und ${chalk.cyan(Math.round(temp_min) + '° C')} bis ${chalk.cyan(Math.round(temp_max) + '° C')}\n`
  return output
}
