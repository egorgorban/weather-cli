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
    Без параметров\t->\tвывод погоды
    -s [CITY]\t->\tустановить город
    -t [API_KEY]\t->\tустановить токен
    -h --help\t->\tвывести это сообщение
    `);
};
