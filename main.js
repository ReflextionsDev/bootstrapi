// --- Part 1 ---
const dog = document.querySelector('.dog')
const btn_dog = document.querySelector('.btn-dog')

btn_dog.addEventListener('click', () => {
    getNewDog()
})

function getNewDog() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (httpResponse) {
            return httpResponse.json();
        })
        .then(function (data) {
            dog.src = data.message
        });
}

// --- Part 2 ---
const input_weather = document.querySelector('.input-weather')
const btn_weather = document.querySelector('.btn-weather')
const weather_temp = document.querySelector('.weather-temp')
const weather_wind = document.querySelector('.weather-wind')
const weather_desc = document.querySelector('.weather-desc')

btn_weather.addEventListener('click', ()=> {
    getWeather()
})

function getWeather() {

    fetch(`https://goweather.herokuapp.com/weather/${input_weather.value}`)
    .then(function (httpResponse) {
        console.log(httpResponse)
        return httpResponse.json();
    })
    .then(function (data) {
        console.log(data)
        weather_temp.innerHTML = data.temperature
        weather_wind.innerHTML = data.wind
        weather_desc.innerHTML = data.description
    });
}

// --- Part 3 ---

const fact = document.querySelector('.fact')
const btn_fact = document.querySelector('.btn-fact')

btn_fact.addEventListener('click', () => {
    getFact()
})

function getFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(function (httpResponse) {
        return httpResponse.json();
    })
    .then(function (data) {
        console.log(data.text)
        fact.innerHTML = data.text
    });
}
