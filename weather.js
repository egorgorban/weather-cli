#!/usr/bin/env_mode

import { getArgs } from "./helpers/args.js";

const initCLI = () => {
    const args = getArgs(process.argv).options;
    console.log(args);
};

initCLI();
