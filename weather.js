#!/usr/bin/env_mode

import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    const options = args.options;
    const commands = args.commands;

    const help = commands.includes("help") || commands.includes("h");

    if (help) {
        printHelp();
    }
};

initCLI();
