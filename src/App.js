import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategorieAudio from "./components/dashComponent/cards/CategorieAudio";
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
import Layout from "./Layout";
import RequireAuth from "./hooks/RequireAuth";
import Home from "./pages/login/Home";
import Anauthorized from "./pages/login/Anauthorized";
function App() {
    const [weatherDemain, setWeatherDemain] = useState(null);
    const [meteoDuJour, setMeteoDuJour] = useState();
    const [coords, setCoords] = useState({});
    const [prevision, setPrevision] = useState();
    const [weather, setWeather] = useState();
    console.log("weather: ", weather);
    const [forecast, setForecast] = useState();
    const [file, setFile] = useState({});

    useEffect(() => {
        const fetchLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
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

    const ROLES = {
        SuperAdmin: 2,
        admin: 3,
        Famers: 4,
    };

    return (
        <DataMeteoContext.Provider
            value={{ setCoords, meteoDuJour, prevision, setFile, file }}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Public routes*/}
                    <Route path="/login" element={<Login />} />
                    <Route path="/enregister" element={<Singin />} />
                    <Route path="/unauthorized" element={<Anauthorized />} />
                    <Route path="/renitialiser" element={<ResetPassword />} />

                    {/* Private routes*/}
                    <Route
                        element={<RequireAuth allowedRoles={[ROLES.Famers]} />}
                    >
                        {/* Famers */}

                        <Route
                            path="/agriculteur/contenu"
                            element={<HomeFamer meteo={weather} />}
                        />
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
                        <Route
                            path="/agriculteur/profile"
                            element={<Profile />}
                        />
                    </Route>
                    {/* Admin AND superAdmin */}
                    <Route
                        element={
                            <RequireAuth
                                allowedRoles={[ROLES.SuperAdmin, ROLES.admin]}
                            />
                        }
                    >
                        <Route path="/" element={<Home />} />

                        <Route
                            path="/dashboard"
                            element={
                                <WeatherCard
                                    meteo={weather}
                                    forecast={forecast}
                                />
                            }
                        />
                        <Route
                            path="/localisation"
                            element={<Localisation />}
                        />
                        <Route
                            path="/alert"
                            element={
                                <Alert meteo={weather} forecast={forecast} />
                            }
                        />
                        <Route path="/parametre" element={<Parametre />} />
                        <Route
                            path="/contenu/categorieaudio"
                            element={<CategorieAudio />}
                        />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.SuperAdmin]} />}>
                        <Route path="/contenu" element={<Contenu />} />
                    </Route>
                </Route>
            </Routes>
        </DataMeteoContext.Provider>
    );
}

export default App;
