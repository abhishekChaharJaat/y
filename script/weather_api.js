// let p = fetch(" https://goweather.herokuapp.com/weather/In");

const apiKey = "ed948abd2302a52102426b128821fc2d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let apiCity = "mathura";

async function checkWeather(apicty) {
  let response = await fetch(apiUrl + `&q=${apicty}&appid=${apiKey}`);
  return response;
}

function getCity() {
  cityInput = document.getElementById("city-input");
  apiCity = cityInput.value;
  cityInput.value = "";

  let p = checkWeather(apiCity);
  p.then((val) => {
    return val.json();
  })
    .then((w_data) => {
      console.log(w_data);
      displayWeather(w_data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// calling a function get city..
getCity();

const displayWeather = (w_data) => {
  document.querySelector(".temp").innerHTML = `${Math.floor(
    w_data.main.temp
  )}°C`;
  document.querySelector(".wind").textContent = `${w_data.wind.speed}km/h`;
  document.querySelector(".city").textContent = w_data.name;
  document.querySelector(".humidity").textContent = `${w_data.main.humidity}%`;
  let weatherImg = document.getElementById("weather-image");
  switch (w_data.weather[0].main) {
    case "Clear":
      weatherImg.src = "/images/clear.png";
      break;
    case "Clouds":
      weatherImg.src = "/images/clouds.png";
      break;
    case "Rain":
      weatherImg.src = "/images/rain.png";
      break;
    case "Fog":
      weatherImg.src = "/images/fog.png";
      break;
    case "Snow":
      weatherImg.src = "/images/snow.png";
      break;
    case "Mist":
      weatherImg.src = "/images/mist.png";
      break;
    case "Drizzle":
      weatherImg.src = "/images/drizzle.png";
      break;
  }
};

// https://gist.github.com/tbranyen/62d974681dea8ee0caa1
