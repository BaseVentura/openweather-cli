import inquirer, { type Answers } from 'inquirer'
import Configstore from 'configstore'
const conf = new Configstore('openweather-cli')
export const init = () => {
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
      choices: ['standard', 'metric', 'imperial'],
      default: 'metric'
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
      when (answers: Answers) {
        return !answers.setFavs
      }
    }
  ]

  inquirer.prompt(questions).then((answers) => {
    conf.set('API_KEY', answers.apiKey)
    conf.set('FAV', answers.fav)
    conf.set('UNIT', answers.units)
  }).catch(e => console.log(e))
}
