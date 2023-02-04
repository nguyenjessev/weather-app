(async () => {
  const apiKey = '505a95affb4abe534b67ce3708d862f1';
  const locationSearch = document.querySelector('#location-search');

  const fetchCoords = async (query) => {
    try {
      const requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${apiKey}`;
      const response = await fetch(requestURL);
      const data = await response.json();

      return { latitude: data[0].lat, longitude: data[0].lon };
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchWeatherData = async (targetCoords) => {
    try {
      const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${targetCoords.latitude}&lon=${targetCoords.longitude}&units=imperial&appid=${apiKey}`;
      const response = await fetch(requestURL);

      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  document
    .querySelector('.search-controls')
    .addEventListener('submit', async (event) => {
      event.preventDefault();

      const query = locationSearch.value || 'Fort Wayne';

      const locationCoords = await fetchCoords(query);
      const weatherData = await fetchWeatherData(locationCoords);

      console.log(weatherData);
    });
})();
