import axios from "axios";

import { getKeyValue } from "./storage.service.js";

export const getWeather = async (city) => {
    const token = await getKeyValue("token");
    if (!token) throw new Error("There is no token. Use `-t` option to set it");
    //todo отрефакторить чтобы вместо строчки token было значение из конфига

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appid: token,
            // todo get `lang` from config
            units: "metric",
        },
    });
    return data;
};
