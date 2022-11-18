import { printError } from "../services/log.service.js";

export const getArgs = (argv) => {
    // todo: cover with tests
    let options = {};
    let commands = [];
    const [executer, file, ...rest] = argv;
    rest.forEach((value, index, array) => {
        if (value.startsWith("-")) {
            const eq = value.indexOf("=");
            if (eq != -1) {
                const argIndex = value.charAt(1) == "-" ? 2 : 1;
                options[value.slice(argIndex, eq)] = value.slice(eq + 1);
            } else if (value.charAt(1) == "-") {
                commands.push(value.slice(2));
            } else if (index === array.length - 1 || array[index + 1].startsWith("-")) {
                commands.push(value.slice(1));
            } else {
                options[value.charAt(1)] = array[index + 1];
            }
        }
    });
    return { commands: commands, options: options };
};

export const validateArgs = (args) => {
    let COMMANDS = ["h", "help"];
    let OPTIONS = ["c", "t"];

    args.commands.forEach((command) => {
        // Check for unknown commands
        if (!COMMANDS.includes(command)) {
            printError(`'${command}' is an unknown command`);
        }
        // Check for options without value (were treated as commands)
        if (OPTIONS.includes(command)) {
            printError(`switch '${command}' requires a value`);
        }
    });

    Object.keys(args.options).forEach((option) => {
        // Check for unknown options
        if (!OPTIONS.includes(option)) {
            printError(`switch '${option}' is unknown`);
        }
    });

    return {
        h: args.commands.includes("h") || args.commands.includes("help"),
        t: args.options.t || args.options.token,
        c: args.options.c || args.options.city,
    };
};
