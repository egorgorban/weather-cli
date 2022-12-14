import axios from "axios";
import { Config } from "../config.js";

import { getKeyValue } from "./storage.service.js";

export const getWeather = async (city) => {
    const token = (await getKeyValue(Config.TOKEN)) ?? Config.TOKEN_VALUE;
    if (!token) throw new Error("There is no token. Use `-t` option to set it");

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appid: token,
            lang: Config.LANG,
            units: "metric",
        },
    });
    return data;
};

export const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case "01":
            return "âī¸";
        case "02":
            return "đ¤ī¸";
        case "03":
            return "âī¸";
        case "04":
            return "âī¸";
        case "09":
            return "đ§ī¸";
        case "10":
            return "đĻī¸";
        case "11":
            return "đŠī¸";
        case "13":
            return "âī¸";
        case "50":
            return "đĢī¸";
    }
};
