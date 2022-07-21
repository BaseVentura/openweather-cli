# OpenWeather Map CLI
This is a comamnd line interface for getting weather inforamation via https://home.openweathermap.org.

To use the cli you need a free API key.

## Iteration one 
In This version the api key is hard coded into a config file. 

Since the package is not on npm ist needs to be installed from source:

1. get the source
2. add your api key in weather.config.json
3. install the tool: `npm i -g`

Then call the app via: 

`weather: <cityName>`