#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const parseWeatherData_1 = __importDefault(require("./util/parseWeatherData"));
const config = __importStar(require("../weather.config.json"));
const genOutput_1 = require("./util/genOutput");
const inquirer_1 = __importDefault(require("inquirer"));
const fs_1 = require("fs");
const apiKey = config.OPEN_WEATHER_API_KEY;
const API_RUL = 'https://api.openweathermap.org/data/2.5/';
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
            when(answers) {
                return !answers.setFavs;
            }
        }
    ];
    inquirer_1.default.prompt(questions).then((answers) => {
        const config = `{
      "OPEN_WEATHER_API_KEY": "${answers.apiKey}",
      "FAV": "${answers.fav}",
      "UNIT": "${answers.units}"
    }`;
        (0, fs_1.writeFile)('weather.config.json', config, (err) => {
            if (err)
                throw err;
            console.log('apiKeysaved');
        });
    }).catch(e => console.log(e));
}
else {
    const city = (_a = process.argv[2]) !== null && _a !== void 0 ? _a : 'giessen';
    axios_1.default.get(`${API_RUL}weather?appid=${apiKey}&units=metric&lang=de&q=${city}`).then(response => {
        console.log((0, genOutput_1.genOutput)((0, parseWeatherData_1.default)(response.data)));
    }).catch(e => {
        console.log(JSON.stringify(e, null, 2));
    });
}
