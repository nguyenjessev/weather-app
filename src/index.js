import weatherFetcher from './weatherFetcher';

(async () => {
  const locationSearch = document.querySelector('#location-search');
  const temperatureControls = document.querySelector('.temperature-controls');
  const temperatureButtons = document.querySelectorAll('.temperature-button');

  const loadWeatherData = async () => {
    try {
      const query = locationSearch.value || 'Fort Wayne';
      const locationData = await weatherFetcher.fetchLocationData(query);
      const weatherData = await weatherFetcher.fetchWeatherData(locationData);

      weatherData.name = locationData.name;

      return weatherData;
    } catch (error) {
      throw new Error(error);
    }
  };

  const formatTemperature = (temperature) => {
    const currentUnit = temperatureControls.dataset.temperatureUnit;
    let formattedTemp = temperature;

    if (currentUnit === 'Fahrenheit') {
      formattedTemp = 1.8 * (temperature - 273.15) + 32;
    } else {
      formattedTemp = temperature - 273.15;
    }

    return formattedTemp;
  };

  const updateWeatherDisplay = (weatherData) => {
    try {
      const currentLocation = weatherData.name;
      const currentTemp = weatherData.main.temp;
      const currentFeelsLikeTemp = weatherData.main.feels_like;

      document.querySelector('.current-location').textContent = currentLocation;
      document.querySelector('.current-temperature').textContent = Math.round(
        formatTemperature(currentTemp)
      );
      document.querySelector('.feels-like-temperature').textContent =
        Math.round(formatTemperature(currentFeelsLikeTemp));

      return true;
    } catch (error) {
      throw new Error(error);
    }
  };

  let currentWeather = await loadWeatherData();

  updateWeatherDisplay(currentWeather);

  document
    .querySelector('.search-controls')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      currentWeather = await loadWeatherData();
      updateWeatherDisplay(currentWeather);
    });

  temperatureButtons.forEach((temperatureButton) => {
    temperatureButton.addEventListener('click', () => {
      temperatureButtons.forEach((button) => {
        button.classList.remove('selected');
      });
      temperatureButton.classList.add('selected');
      temperatureControls.dataset.temperatureUnit =
        temperatureButton.textContent;
      updateWeatherDisplay(currentWeather);
    });
  });
})();
