var fetchWeather = "/city";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const temperature = document.querySelector('.temperature');
const nameCity = document.querySelector('.name-city');
const date = document.querySelector('.date');
const weather = document.querySelector('.weather');

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
date.textContent = new Date().getDate() + " " + monthNames[new Date().getMonth()] + ", " + new Date().getFullYear();

const namePokemon = document.querySelector('.name-pokemon');
const typePokemon = document.querySelector('.type-pokemon');
const heightPokemon = document.querySelector('.height-pokemon');
const weightPokemon = document.querySelector('.weight-pokemon');
const baseExperiencePokemon = document.querySelector('.base-experience-pokemon');

const hpStat = document.querySelector('.hp-stat');
const attackStat = document.querySelector('.attack-stat');
const defenseStat = document.querySelector('.defense-stat');
const specialAttackStat = document.querySelector('.special-attack-stat');
const specialDefenseStat = document.querySelector('.special-defense-stat');
const speedStat = document.querySelector('.speed-stat');

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const locationApi = fetchWeather + "?city=" + search.value;
    cleanValues();
    nameCity.textContent = "Loading ...";
    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                cleanValues();
                alert(data.error);
            } else {
                document.getElementById("weather-condition").src = selectWeatherImage(data.weather);

                if(data.pokemon.urlImage === null) {document.getElementById("pokemon-image").src = "https://www.panpuri.com/asset/images/product/noimg.jpg";}
                else {document.getElementById("pokemon-image").src = data.pokemon.urlImage;}

                nameCity.textContent = data.cityName;
                temperature.textContent = `${data.temperature}°C / ${((data.temperature * 1.8) + 32).toFixed(2)}°F`; 
                weather.textContent = data.weather.toUpperCase();

                namePokemon.textContent = `${data.pokemon.name}`.replace(/-/g, " ");
                typePokemon.textContent = `Type: ${data.pokemon.type}`;
                heightPokemon.textContent = `Height : ${(data.pokemon.height / 10)} m`;
                weightPokemon.textContent = `Weight : ${(data.pokemon.weight / 10)} Kg`;
                baseExperiencePokemon.textContent = `Base Experience: ${data.pokemon.experience}`;
                
                hpStat.textContent = data.pokemon.baseStats.hp;
                attackStat.textContent = data.pokemon.baseStats.attack;
                defenseStat.textContent = data.pokemon.baseStats.defense;
                specialAttackStat.textContent = data.pokemon.baseStats.specialAttack;
                specialDefenseStat.textContent = data.pokemon.baseStats.specialDefense;
                speedStat.textContent = data.pokemon.baseStats.speed;

                hp.style = `width: calc(${hpStat.textContent} / 250 * 100%)`;
                attack.style = `width: calc(${attackStat.textContent} / 250 * 100%)`;
                defense.style = `width: calc(${defenseStat.textContent} / 250 * 100%)`;
                specialAttack.style = `width: calc(${specialAttackStat.textContent} / 250 * 100%)`;
                specialDefense.style = `width: calc(${specialDefenseStat.textContent} / 250 * 100%)`;
                speed.style = `width: calc(${speedStat.textContent} / 250 * 100%)`;                
            }
        }) 
    });
})

function cleanValues() {
    nameCity.textContent = "~~~~";
    temperature.textContent = "~~~";
    weather.textContent = "~~~~"

    namePokemon.textContent = "~~~~";
    typePokemon.textContent = "Type: ~~~~~~";
    heightPokemon.textContent = "Height : ~~~~~~";
    weightPokemon.textContent = "Weight : ~~~~~~";
    baseExperiencePokemon.textContent = "Base Experience: ~~~~~~";

    document.getElementById("weather-condition").src = "";
    document.getElementById("pokemon-image").src = "https://567.cdn.simplo7.net/static/567/sku/156399382547374.png";

    hpStat.textContent = "00";
    attackStat.textContent = "00";
    defenseStat.textContent = "00";
    specialAttackStat.textContent = "00";
    specialDefenseStat.textContent = "00";
    speedStat.textContent = "00";

    specialAttack.style = "";
    specialDefense.style = "";
    speed.style = "";
    hp.style = "";
    attack.style = "";
    defense.style = "";
}

function selectWeatherImage(weather) {
    if(weather === "Clear"){
        return "https://img.icons8.com/officel/2x/summer.png";
    }else if(weather === "Snow"){
        return "https://img.icons8.com/officel/2x/snow.png";
    }else if(weather === "Clouds"){
        return "https://img.icons8.com/officel/2x/clouds.png";
    }else if(weather === "Rain"){
        return "https://img.icons8.com/officel/2x/rain.png";
    }else if(weather === "Storm"){
        return "https://img.icons8.com/officel/2x/storm.png";
    }else if(weather === "Fog"){
        return "https://www.flaticon.com/svg/vstatic/svg/495/495651.svg?token=exp=1612195638~hmac=16d1059daa8fad885c421bac5dd0a908";
    }  
    return "";
}
