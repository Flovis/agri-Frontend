import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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

    return (
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
        </Routes>
    );
}

export default App;
