# Weather CLI

## Description

The app will help you find out the weather near your location. For that purpose it uses an external API -> https://openweathermap.org/api

✨ This is my first project on NodeJS! ✨

I'm following instructions from [here](https://stepik.org/course/105538).

## Installation Guide

First you need to get `npm` and `node` on your machine. If you don't have it I recommend you install it through the official [page](https://nodejs.org/en/download/).

To **install CLI tool** you need to execute the following command

```bash
npm i -g egorgorban-weather-cli
```

After that `weather` command should be available.

You can type the following command to make sure it works

```bash
weather --help
```

## Options Setting

You can specify two options: city and token.

To specify city you can use one of the `c`, `city` parameters, to specify the token - one of the `t`, `token`. You can simply add param value after option name, like `-c London` or use an equal sign `-token=1234`

### City

To set the city you need to use `-c` option. It's `Paris` by default.

```bash
weather -c Munich
```

If the name of your city contains more than one word, you can use quotation marks

```bash
weather -c "Saint Petersburg"
```

### Token

I do not expect my application to be very popular, so the token I'm using here is not suitable for a large number of requests.

In case the token is expired (you will see the error) you can **set your own token** to be able to do more requests per month.

To do this you need to sign in on https://openweathermap.org and get your personal token on [this page](https://home.openweathermap.org/api_keys).

Please add this token to your instance of the app via `-t` option.

```bash
weather -t <token>
```

## What have I learned here

-   used `http` and `axios` to make http requests
-   made my own naive function to parse CLI arguments -> `./helpers/args.js`
-   used `chalk` and `dedent` to customise the console output
-   worked with an external API with token authentication
