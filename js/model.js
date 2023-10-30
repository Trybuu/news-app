const OPEN_WEATHER_API_KEY = `408c2762fda8a0e89a3a75fd0d84dbcc`;

// const navLocalInfo = document.querySelector(".nav__logo-time__time");

// const state = {
//   user: {
//     lat: "",
//     long: "",
//   },
// };

// async function getLatLong() {
//   // 1) Get and Set user Latitude and Longitude in state

//   navigator.geolocation.getCurrentPosition(function (position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     state.user.lat = latitude;
//     state.user.long = longitude;

//     // 2) Get Weather, City, Time from Weather API
//     const data = getWeather(latitude, longitude);

//     // 3) Generate and render markup with data
//     console.log(data);
//     const html = `
//         <span>Warsaw 5C | 2023/30/10</span>
//     `;
//     navLocalInfo.insertAdjacentHTML("afterbegin", html);
//   });
// }

// async function getWeather(lat, long) {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&id=${OPEN_WEATHER_API_KEY}`
//   );

//   const data = await res.json();
//   console.log(data);
//   return data;
// }

// getLatLong();

const state = {
  location: {
    lat: "",
    lon: "",
  },
};

setUserLocation = function () {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    state.location.lat = latitude;
    state.location.lon = longitude;
  });
};

setUserLocation();
// moze wywołać za pomoca event listenera"?

async function getWeather() {
  try {
    const { lat, lon } = state.location;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=408c2762fda8a0e89a3a75fd0d84dbcc `
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(`⚠️ Something went wrong! Error: ${err}`);
  }
}

getWeather();
