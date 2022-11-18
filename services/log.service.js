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

export const printWeather = function (res, icon) {
    console.log(dedent`
    ${chalk.bgMagenta(" WEATHER ")} in the city of ${res.name}
    ${icon}  ${res.weather[0].main} [${res.weather[0].description}]
    Temperature:\t${res.main.temp}°C (feels like ${res.main.feels_like}°C)
    Humidity:\t${res.main.humidity}%
    Wind speed:\t${res.wind.speed}m/sec
    `);
};
