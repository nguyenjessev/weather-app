import weatherFetcher from './weather_fetcher';

(() => {
  const locationSearch = document.querySelector('#location-search');

  document
    .querySelector('.search-controls')
    .addEventListener('submit', async (event) => {
      event.preventDefault();

      const query = locationSearch.value || 'Fort Wayne';

      const locationCoords = await weatherFetcher.fetchCoords(query);
      const weatherData = await weatherFetcher.fetchWeatherData(locationCoords);

      console.log(weatherData);
    });
})();
