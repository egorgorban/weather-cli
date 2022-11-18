import { join, resolve } from "path";
import { readFile, writeFile } from "fs/promises";

const dbPath = join(resolve("."), "data", "weather-data.json");

const getDataFromDB = async function () {
    try {
        const file = await readFile(dbPath);
        return JSON.parse(file);
    } catch (error) {
        return undefined;
    }
};

export const saveKeyValue = async function (k, v) {
    let data = (await getDataFromDB()) || {};
    data[k] = v;
    await writeFile(dbPath, JSON.stringify(data));
};

export const getKeyValue = async function (k) {
    const data = await getDataFromDB();
    return data[k];
};
