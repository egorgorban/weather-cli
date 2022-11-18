import chalk from "chalk";
import dedent from "dedent-js";

export const printError = function (error) {
    console.log(chalk.bgRed(" ERROR ") + " " + error);
};

export const printSuccess = function (success) {
    console.log(chalk.bgGreen(" SUCCESS ") + " " + success);
};

export const printHelp = function () {
    console.log(dedent`
    ${chalk.bgCyan(" HELP ")} 
    no args\t\t\t->\tprint the current weather
    -c -city [CITY]\t\t->\tset the 'city' param to a given value
    -t -token [API_KEY]\t->\tset the 'token' param to a given value
    -h -help\t\t->\tprint this message
    `);
};
