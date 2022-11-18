#!/usr/bin/env node

import { getArgs, validateArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import { printError, printSuccess, printHelp, printWeather } from "./services/log.service.js";
import { saveKeyValue, getKeyValue } from "./services/storage.service.js";
import { Config } from "./config.js";

const saveItem = async (name, item) => {
    try {
        await saveKeyValue(name, item);
        printSuccess(`the '${name}' param is set to '${item}'`);
    } catch (error) {
        printError(error.message);
    }
};

const getForecast = async function (city) {
    try {
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (error) {
        // axios 404 error
        if (error?.response?.status == 404) {
            printError(`404: The city ${getKeyValue(Config.CITY)} is not found`);
        } // axios 401 error
        else if (error?.response?.status == 401) {
            printError("401: Your Token is wrong");
        } // custom error
        else {
            printError(error.message);
        }
    }
};

const initCLI = async () => {
    const args = validateArgs(getArgs(process.argv));

    if (args.h) printHelp();
    if (args.t) await saveItem(Config.TOKEN, args.t);
    if (args.c) await saveItem(Config.CITY, args.c);
    if (
        !Object.values(args).some((el, i, arr) => {
            return el;
        })
    )
        await getForecast(await getKeyValue(Config.CITY));
};

initCLI();
