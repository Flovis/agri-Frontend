import React, { useState } from "react";

const Test = () => {
  const [weather, setWeather] = useState();
  console.log("weather: ", weather);
  let unit = "";
  let week = "semaine";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://geolocation-db.com/json/");
  //       const data = response.data;
  //       console.log("data: ", data);
  //     } catch (error) {
  //       console.error("bizare");
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const key = "YLMA6WP2ZAPF6YBTPP4DXC476";
  //   const fetchDataWeather = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/25,-11?key=${key}`
  //       );
  //       const data = response.data;
  //       let today = data.currentConditions.temps;
  //       console.log("today: ", today);
  //       let currentWeather = ((today * 9) / 5 + 32).toFixed(1);
  //       console.log("currentWeather: ", currentWeather);

  //       setWeather();
  //     } catch (error) {
  //       console.error("bizare");
  //     }
  //   };

  //   fetchDataWeather();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"></div>
  );
};
export default Test;
