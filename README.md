# Weather Application

A simple weather API that returns weather data for the city in JSON format.

## Usage

Use https://weatherup-app.herokuapp.com/weather/city/{cityName}

Replace {cityName} with a valid city name and it will return the temperature of that city in fahrenheit.

e.g. https://weatherup-app.herokuapp.com/weather/city/lahore

## Setup on Local Machine

-   Clone the repository
-   Run `npm install`
-   Create a `.env` file at root and include you OpenWeather API key in against the variable `WEATHERAPIKEY`
-   Run `npm start`
