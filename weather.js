#!/usr/bin/env_mode

import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveItem = async (name, item) => {
    try {
        await saveKeyValue(name, item);
        printSuccess(`${name} '${item}' saved`);
    } catch (error) {
        printError(error.message);
    }
};

const initCLI = async () => {
    const args = getArgs(process.argv);
    const options = args.options;
    const commands = args.commands;

    const help = commands.includes("help") || commands.includes("h");
    const city = options["s"];
    const token = options["t"];

    if (help) printHelp();
    if (token) await saveItem("token", token);
    if (city) await saveItem("city", city);
};

initCLI();
