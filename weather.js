#!/usr/bin/env_mode

import { getArgs, validateArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";
import { Config } from "./config.js";

const saveItem = async (name, item) => {
    try {
        await saveKeyValue(name, item);
        printSuccess(`the '${name}' param is set to '${item}'`);
    } catch (error) {
        printError(error.message);
    }
};

const initCLI = async () => {
    const args = validateArgs(getArgs(process.argv));

    if (args.h) printHelp();
    if (args.t) await saveItem(Config.TOKEN, args.t);
    if (args.c) await saveItem(Config.CITY, args.c);
    console.log(await getWeather());
};

initCLI();
