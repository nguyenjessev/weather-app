import weatherFetcher from './weatherFetcher';

(async () => {
  const locationSearch = document.querySelector('#location-search');

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

  const updateWeatherDisplay = (weatherData) => {
    try {
      const currentLocation = weatherData.name;
      const currentTemp = weatherData.main.temp;
      const currentFeelsLikeTemp = weatherData.main.feels_like;

      document.querySelector('.current-location').textContent = currentLocation;
      document.querySelector('.current-temperature').textContent =
        Math.round(currentTemp);
      document.querySelector('.feels-like-temperature').textContent =
        Math.round(currentFeelsLikeTemp);

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
})();
