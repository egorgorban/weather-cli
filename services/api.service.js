import axios from "axios";
import { Config } from "../config.js";

import { getKeyValue } from "./storage.service.js";

export const getWeather = async (city) => {
    const token = await getKeyValue(Config.TOKEN);
    if (!token) throw new Error("There is no token. Use `-t` option to set it");

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
