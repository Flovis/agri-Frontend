import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategorieArticle from "./components/dashComponent/cards/CategorieArticle";
import CategorieAudio from "./components/dashComponent/cards/CategorieAudio";
import CategorieImage from "./components/dashComponent/cards/CategorieImage";
import CategoriePdf from "./components/dashComponent/cards/CategoriePdf";
import CategorieTexte from "./components/dashComponent/cards/CategorieText";
import CategorieVideo from "./components/dashComponent/cards/CategorieVideo";
import WeatherCard from "./components/dashComponent/cards/WeatherCard";
import DataMeteoContext from "./context/MeteoContext";
import Alert from "./pages/dashboard/Alert";
import Contenu from "./pages/dashboard/Contenu";
import Localisation from "./pages/dashboard/Localisation";
import Parametre from "./pages/dashboard/Parametre";
import AddPlanProduction from "./pages/famer/AddPlanProduction";
import HomeFamer from "./pages/famer/HomeFamer";
import Meteo from "./pages/famer/Meteo";
import Notifications from "./pages/famer/Notifications";
import ProductionPlan from "./pages/famer/ProductionPlan";
import Profile from "./pages/famer/Profile";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/login/ResetPassword";
import Singin from "./pages/login/Singin";

function App() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [conditionAlert, setConditionAlert] = useState({});
  const [formData, setFormData] = useState([]);

  // console.log("conditionAlerterve: ", conditionAlert);
  const [file, setFile] = useState({});

  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchDataWeather(position.coords.latitude, position.coords.longitude);
          fetchDataForecast(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.error(error);
        }
      );
    };
    fetchLocation();
  }, []);

  const fetchDataWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.agromonitoring.com/agro/1.0/weather?lat=${latitude}&lon=${longitude}&appid=04dba98791c3cefc74d0256ec64c6bc9`
      );
      const data = response.data;

      setWeather(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchDataForecast = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${latitude}&lon=${longitude}&appid=04dba98791c3cefc74d0256ec64c6bc9`
      );
      const forecastData = response.data;
      const meteoInfos = forecastData?.map((card, index) => {
        const date = new Date(card.dt * 1000);
        const options = { weekday: "long", timeZone: "UTC" };
        const jour = new Intl.DateTimeFormat("fr-FR", options).format(date);
        const heure = date.getHours() + ":00";
        const temperature = Math.floor(card?.main?.temp - 273) + "°c";
        const icon = card.weather[0].icon;
        const condition = card.weather[0].description;
        return { jour, heure, temperature, condition };
      });
      setForecast(meteoInfos);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DataMeteoContext.Provider
      value={{
        forecast,
        setFile,
        file,
        conditionAlert,
        setConditionAlert,
        setFormData,
        formData,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/enregister" element={<Singin />} />
        <Route path="/renitialiser" element={<ResetPassword />} />
        <Route path="/agriculteur/contenu" element={<HomeFamer />} />
        <Route path="/agriculteur/meteo" element={<Meteo />} />
        <Route path="/agriculteur/notifications" element={<Notifications />} />
        <Route
          path="/agriculteur/plan-de-production"
          element={<ProductionPlan />}
        />
        <Route
          path="/agriculteur/plan-de-production/ajouter"
          element={<AddPlanProduction />}
        />
        <Route path="/agriculteur/profile" element={<Profile />} />
        {/* Part 2 */}
        <Route
          path="/dashboard"
          element={<WeatherCard meteo={weather} forecast={forecast} />}
        />
        <Route path="/contenu" element={<Contenu />} />
        <Route path="/localisation" element={<Localisation />} />
        <Route
          path="/alert"
          element={<Alert meteo={weather} forecast={forecast} />}
        />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/contenu/categorieaudio" element={<CategorieAudio />} />
        <Route path="/contenu/categoriepdf" element={<CategoriePdf />} />
        <Route path="/contenu/categorietexte" element={<CategorieTexte />} />
        <Route path="/contenu/categorievideo" element={<CategorieVideo />} />
        <Route
          path="/contenu/categoriearticle"
          element={<CategorieArticle />}
        />
        <Route path="/contenu/categorieimage" element={<CategorieImage />} />
      </Routes>
    </DataMeteoContext.Provider>
  );
}

export default App;
