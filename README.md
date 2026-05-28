# ☀️ OpenWeather CLI

A minimal, lightweight command-line interface for retrieving weather information via the [OpenWeatherMap API](https://openweathermap.org/).

## Features

- 🌍 Get weather for any city in the world
- 💾 Save your favorite city for quick lookups
- 🎨 Colored, readable output
- ⚡ Fast and lightweight
- 🔧 Easy setup and configuration

## Prerequisites

- Node.js 18.0.0 or higher
- A free API key from [OpenWeatherMap](https://home.openweathermap.org/api)

## Installation

### From Source

```bash
git clone https://github.com/BaseVentura/openweather-cli.git
cd openweather-cli
npm install
npm run build
npm install -g .
```

### Via npm (coming soon)

Once published to npm, you'll be able to install with:
```bash
npm install -g openweather-cli
```

## Setup

First time setup - initialize the CLI with your OpenWeatherMap API key:

```bash
weather --init
```

You'll be prompted to:
1. Enter your OpenWeatherMap API key
2. (Optionally) Set your favorite city for quick access

## Usage

Get weather for a specific city:
```bash
weather London
weather "New York"
```

Get weather for your favorite city (if set):
```bash
weather
```

View help:
```bash
weather --help
```

Re-initialize settings:
```bash
weather --init
```

## Getting an API Key

1. Visit [OpenWeatherMap](https://home.openweathermap.org/)
2. Sign up for a free account
3. Go to your [API keys page](https://home.openweathermap.org/api)
4. Copy your default API key
5. Use it when running `weather --init`

## Development

### Prerequisites

```bash
npm install
```

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run dev
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Format Code

```bash
npm run format
```

### Clean Build

```bash
npm run clean
```

## Project Structure

```
src/
├── index.ts                      # Entry point
├── rawWeatherData.interface.ts   # API response types
├── weatherData.interface.ts      # Formatted weather types
└── util/
    ├── init.ts                   # CLI initialization
    ├── parseWeatherData.ts       # Data parsing logic
    └── printOutput.ts            # Output formatting
```

## Configuration

Settings are stored in your OS config directory:
- **macOS**: `~/Library/Preferences/openweather-cli-nodejs`
- **Linux**: `~/.config/openweather-cli-nodejs`
- **Windows**: `%APPDATA%\openweather-cli-nodejs\Config`

## Troubleshooting

### "Please initialize the tool via --init"
You haven't set up your API key yet. Run:
```bash
weather --init
```

### "Error: Invalid API key"
Your API key is incorrect or inactive. Re-run:
```bash
weather --init
```

### "City not found"
Check the spelling and try again. The API uses city names from OpenWeatherMap's database.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

ISC

## Author

Max Stricker

## Related

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Chalk - Terminal string styling](https://github.com/chalk/chalk)
- [Inquirer.js - Interactive CLI](https://github.com/SBoudrias/Inquirer.js)
