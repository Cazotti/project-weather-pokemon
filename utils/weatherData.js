const request = require('request');
const constants = require('../config/config');

const weatherData = (city, callback) => {
    const url = constants.openweathermap.BASE_URL + encodeURIComponent(city) + '&appid=' + constants.openweathermap.APPID + '&units=metric'; 
    request(url, {json:true}, (error, {body}) => {
        if(error || body.cod == "404"){
            callback(undefined, {cod: body.cod});
        }else{
            callback(undefined, {
                cityName: body.name,
                temperature: body.main.temp,
                weather: body.weather[0].main
            })
        }
    })
}

module.exports = weatherData;
