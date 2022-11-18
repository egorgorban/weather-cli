import {} from "dotenv/config";

export const Config = {
    TOKEN: process.env.APP_WEATHER_TOKEN ?? "token",
    CITY: process.env.APP_WEATHER_CITY ?? "city",
    LANG: process.env.APP_WEATHER_LANG ?? "en"
};
