import {} from "dotenv/config";

export const Config = {
    TOKEN: "token",
    CITY: "city",
    TOKEN_VALUE: process.env.APP_WEATHER_TOKEN,
    CITY_VALUE: process.env.APP_WEATHER_CITY,
    LANG: process.env.APP_WEATHER_LANG ?? "en",
};
