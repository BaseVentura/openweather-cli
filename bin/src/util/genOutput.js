"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genOutput = void 0;
const chalk_1 = __importDefault(require("chalk"));
const genOutput = (data) => {
    const { cityName, temp_min, temp_max, weather } = data;
    const output = `\nWetter in ${chalk_1.default.cyan(cityName)}: ${weather} und ${chalk_1.default.cyan(Math.round(temp_min) + '° C')} bis ${chalk_1.default.cyan(Math.round(temp_max) + '° C')}\n`;
    return output;
};
exports.genOutput = genOutput;
