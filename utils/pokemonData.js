const request = require('request');
const constants = require('../config/config');

let oldPoke = 0;

function getRandomIntInclusive(max) {
    newPoke = Math.floor(Math.random() * max);
    while(newPoke == oldPoke){
        newPoke = Math.floor(Math.random() * max);
    }
    oldPoke = newPoke;
    return newPoke;
}

const namePokemon = (type, callback) => {
    const url = constants.pokeapi.TYPE_URL + type;
    request(url, {json:true}, (error, {body}) => {
        if(error){
            callback(undefined);
        }else{
            callback(undefined, {
                name: body.pokemon[getRandomIntInclusive(body.pokemon.length)].pokemon.name
            });
        }
    });
};

const statsPokemon = (name, callback) => {
    const urlStats = constants.pokeapi.STATS_URL + name;
    request(urlStats, {json:true}, (error, {body}) => {
        if(error){
            callback(undefined);
        }else{
            callback(undefined, {
                hp: body.stats[0].base_stat,
                attack: body.stats[1].base_stat,
                defense: body.stats[2].base_stat,
                specialAttack: body.stats[3].base_stat,
                specialDefense: body.stats[4].base_stat,
                speed: body.stats[5].base_stat,
                experience: body.base_experience,
                height: body.height,
                weight: body.weight
            });
        }
    });
};

const imagePokemon = (name, callback) => {
    const urlStats = constants.pokeapi.IMAGE_URL + name;
    request(urlStats, {json:true}, (error, {body}) => {
        if(error){
            callback(undefined);
        }else{
            if(body !== "Not Found") { callback(undefined, { urlImage: body.sprites.front_default }); }
            else { callback(undefined, { urlImage: null }); }
        }
    });
};

module.exports = {
    namePokemon,
    statsPokemon,
    imagePokemon
};