//time and date
let today = new Date();

let showDate = document.querySelector(".date");

let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

showDate.innerHTML = `${date}.${month + 1}.${year}`;

let showTime = document.querySelector(".time");

let hours = today.getHours();
let minutes = today.getMinutes();

showTime.innerHTML = `${hours}:${minutes}`;

//city name change
function changeCityName(event) {
  event.preventDefault();
  let newCityName = document.querySelector("#search-new-city");
  let heading = document.querySelector("h3");
  heading.innerHTML = `${newCityName.value}`;

  findWeather(newCityName.value);
}

let formForCity = document.querySelector("#city-input");
formForCity.addEventListener("submit", changeCityName);

//find weather for searching city
function findWeather(cityName) {
  let apiKey = "670e88793852b42366cd8790c3445dbc";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

  function showNewCityTemperature(responce) {
    //change weather
    let weather = responce.data.weather[0].description;
    let weatherDescription = weather[0].toUpperCase() + weather.slice(1);
    let weathertureInCurrentCity = document.querySelector(
      ".current-precipitation"
    );
    weathertureInCurrentCity.innerHTML = `${weatherDescription}`;
    //change temperature
    let temperature = Math.round(responce.data.main.temp);
    let temperatureInCurrentCity = document.querySelector("h1");
    temperatureInCurrentCity.innerHTML = `${temperature}°`;
    //change Pressure
    let pressure = responce.data.main.pressure;
    let pressureInCurrentCity = document.querySelector(".prassure");
    pressureInCurrentCity.innerHTML = `${pressure} mb`;
    //change visibility
    let visibility = responce.data.visibility / 1000;
    let visibilityInCurrentCity = document.querySelector(".visibility");
    visibilityInCurrentCity.innerHTML = `${visibility} km`;
    //change wind
    let wind = responce.data.wind.speed;
    let windInCurrentCity = document.querySelector(".wind");
    windInCurrentCity.innerHTML = `${wind} m/s`;
  }

  axios
    .get(`${apiUrl}&q=${cityName}&appid=${apiKey}`)
    .then(showNewCityTemperature);
}
