import api from './axios';

const fetchData = async (latitude, longitude, setForecast, setWeather) => {
  try {
    const [forecastResponse, weatherResponse] = await Promise.all([
      api.get(`/weather/forecast?lat=${latitude}&lon=${longitude}`),
      api.get(`/weather/?lat=${latitude}&lon=${longitude}`),
    ]);

    const forecastData = forecastResponse.data;
    const weatherData = weatherResponse.data;



    const getFormattedDate = (timestamp) => {
      const date = new Date(timestamp * 1000);
      const options = { weekday: 'long', timeZone: 'UTC' };
      return new Intl.DateTimeFormat('fr-FR', options).format(date);
    };
    
    const getFormattedHour = (timestamp) => {
      const date = new Date(timestamp * 1000);
      return `${date.getHours()}:00`;
    };
    
    const formatTemperature = (kelvin) => {
      const celsius = Math.floor(kelvin - 273);
      return `${celsius}°C`;
    };
    
    const meteoInfos = forecastData?.map((card) => {
      const { dt, main, weather } = card;
      const day = getFormattedDate(dt);
      const hour = getFormattedHour(dt);
      const temperature = formatTemperature(main.temp);
      const icon = weather[0].icon;
      const condition = weather[0].description;
      
      return { day, hour, temperature, condition, icon };
    });
    

    setForecast(meteoInfos);
    setWeather(weatherData);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default fetchData;
