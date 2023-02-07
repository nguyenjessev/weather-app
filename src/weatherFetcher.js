const apiKey = '505a95affb4abe534b67ce3708d862f1';

const fetchLocationData = async (query) => {
  try {
    const requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${apiKey}`;
    const response = await fetch(requestURL);
    const data = (await response.json())[0];
    const latitude = data.lat;
    const longitude = data.lon;
    let { name } = data;

    if (data.state) {
      name += `, ${data.state}`;
    }

    return {
      latitude,
      longitude,
      name,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const fetchWeatherData = async (locationData) => {
  try {
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&units=imperial&appid=${apiKey}`;
    const response = await fetch(requestURL);

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  fetchLocationData,
  fetchWeatherData,
};
