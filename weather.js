#!/usr/bin/env_mode

import { getArgs, validateArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

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
    if (args.t) await saveItem("token", args.t);
    if (args.c) await saveItem("city", args.c);
};

initCLI();
