const express = require('express');
const app = express();

const weatherData = require('./utils/weatherData');
const pokemonData = require('./utils/pokemonData');

app.use(express.static(__dirname + '/views'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/city', (req, res) => {
    const city = req.query.city
    if(!city) {return res.send({error: "You must enter a city in search text box."});}

    weatherData(city, (error, {cityName, temperature, weather, cod}) => {
        if(cod === "404") {return res.send({error: "Could not find this city."});}

        let type = 'electric';
        if(weather != "Rain"){
            if(temperature < 5){
                type = 'ice';
            }else if(temperature >= 5 && temperature < 10){
                type = 'water'
            }else if(temperature >= 12 && temperature < 15){
                type = 'grass'
            }else if(temperature >= 15 && temperature < 21){
                type = 'ground'
            }else if(temperature >= 23 && temperature < 27){
                type = 'bug'
            }else if(temperature >= 27 && temperature <= 33){
                type = 'rock'
            }else if(temperature > 33){
                type = 'fire'
            }else{
                type = 'normal'
            }
        }

        pokemonData.namePokemon(type, (error, {name}) => {
            if(error) return res.send({error});
            pokemonData.statsPokemon(name, (error, {hp, attack, defense, specialAttack, specialDefense, speed, experience, height, weight}) => {
                if(error) return res.send({error});
                pokemonData.imagePokemon(name, (error, {urlImage}) => {
                    if(error) return res.send({error});
                    res.send(
                        {
                            cityName,
                            temperature, 
                            weather,
                            "pokemon":{
                                name, 
                                type,
                                experience,
                                urlImage,
                                height,
                                weight,                                
                                "baseStats":{
                                    hp,
                                    attack,
                                    defense,
                                    specialAttack,
                                    specialDefense,
                                    speed                                    
                                }
                            }
                        }                    
                    );
                });
            });
        });
    });
});

module.exports = app;