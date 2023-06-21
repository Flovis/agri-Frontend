import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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
    const [weatherDemain, setWeatherDemain] = useState(null);
    const [meteoDuJour, setMeteoDuJour] = useState();
    const [coords, setCoords] = useState({});
    const [prevision, setPrevision] = useState();
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    useEffect(() => {
        const fetchLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Coordinates: ", position.coords);
                    fetchDataWeather(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    fetchDataForcast(
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
            console.log("forcast: ", data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const fetchDataForcast = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${latitude}&lon=${longitude}&appid=04dba98791c3cefc74d0256ec64c6bc9`
            );
            const forecast = response.data;
            setForecast(forecast);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <DataMeteoContext.Provider
            value={{ setCoords, meteoDuJour, prevision }}
        >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/enregister" element={<Singin />} />
                <Route path="/renitialiser" element={<ResetPassword />} />
                <Route path="/agriculteur/contenu" element={<HomeFamer />} />
                <Route path="/agriculteur/meteo" element={<Meteo />} />
                <Route
                    path="/agriculteur/notifications"
                    element={<Notifications />}
                />
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
                    element={
                        <WeatherCard meteo={weather} forecast={forecast} />
                    }
                />
                <Route path="/dashboard/contenu" element={<Contenu />} />
                <Route
                    path="/dashboard/localisation"
                    element={<Localisation />}
                />
                <Route
                    path="/dashboard/alert"
                    element={<Alert forecast={forecast} />}
                />
                <Route path="/dashboard/parametre" element={<Parametre />} />
            </Routes>
        </DataMeteoContext.Provider>
    );
}

export default App;
