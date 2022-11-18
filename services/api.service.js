import https from "node:https";
import { getKeyValue } from "./storage.service.js";

export const getWeather = async (city) => {
    const token = await getKeyValue("token");
    if (!token) throw new Error("There is no token. Use `-t` option to set it");
    //todo отрефакторить чтобы вместо строчки token было значение из конфига
    // todo get lang from config

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", city);
    url.searchParams.append("appid", token);
    url.searchParams.append("units", "metric");

    https.get(url, (response) => {
        let res = "";
        response.on("data", (chunk) => {
            res += chunk;
        });
        response.on("end", () => {
            console.log(res);
        });
    });
};
