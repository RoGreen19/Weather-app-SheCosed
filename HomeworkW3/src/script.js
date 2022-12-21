let weather = {
  paris: {
    name: "Paris",
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    name: "Tokio",
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    name: "Lisbon",
    temp: 30.2,
    humidity: 20,
  },
  sanFrancisco: {
    name: "San Francisco",
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    name: "Oslo",
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city:");

city = city[0].toUpperCase() + city.slice(1);

if (city === "Paris") {
  alert(
    `It is currently ${Math.round(weather.paris.temp)} (${Math.round(
      weather.paris.temp * 1.8 + 32
    )}°) in ${weather.paris.name} with a humidity of ${weather.paris.humidity}%`
  );
} else if (city === "Lisbon") {
  alert(
    `It is currently ${Math.round(weather.lisbon.temp)} (${Math.round(
      weather.lisbon.temp * 1.8 + 32
    )}°) in ${weather.lisbon.name} with a humidity of ${
      weather.lisbon.humidity
    }%`
  );
} else if (city === "San Francisco") {
  alert(
    `It is currently ${Math.round(weather.sanFrancisco.temp)} (${Math.round(
      weather.sanFrancisco.temp * 1.8 + 32
    )}°) in ${weather.sanFrancisco.name} with a humidity of ${
      weather.sanFrancisco.humidity
    }%`
  );
} else if (city === "Oslo") {
  alert(
    `It is currently ${Math.round(weather.oslo.temp)} (${Math.round(
      weather.oslo.temp * 1.8 + 32
    )}°) in ${weather.oslo.name} with a humidity of ${weather.oslo.humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
  );
}
