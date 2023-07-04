import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

import WeatherCard from "./components/dashComponent/cards/WeatherCard";
import DataMeteoContext from "./context/MeteoContext";
import RequireAuth from "./hooks/RequireAuth";
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
import Anauthorized from "./pages/login/Anauthorized";
import Home from "./pages/login/Home";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/login/ResetPassword";
import Singin from "./pages/login/Singin";
import fetchData from "./api/fetchData";
import Step from "./components/dashComponent/Contenu/step/Step";

function App() {
  const [conditionAlert, setConditionAlert] = useState({});
  const [formData, setFormData] = useState([]);
  const [file, setFile] = useState({});
  const [localisation, setLocalisation] = useState(null);
  console.log("localisation: ", localisation);
  const [forecast, setForecast] = useState([]);
  console.log("forecast: ", forecast);
  const [weather, setWeather] = useState(null);
  const [contenu, setContenu] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocalisation(position.coords);
        },
        function (error) {
          console.log();
        }
      );
    } else {
      console.log();
    }

    // const fetchLocation = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://api.geoapify.com/v1/ipinfo?apiKey=bc48e577c88a4323b3aa05f60905df63"
    //     );
    //     const data = await response.json();
    //     setLocalisation(data);
    //   } catch (error) {
    //     if (error.response) {
    //       console.log("wahoo");
    //     } else {
    //       console.log(error);
    //     }
    //   }
    // };

    // fetchLocation();
  }, []);
  useEffect(() => {
    if (localisation) {
      fetchData(
        localisation.latitude,
        localisation.longitude,
        setForecast,
        setWeather
      );
    }
  }, [localisation]);
  const dataMeteoContextValue = {
    forecast,
    weather,
    setFile,
    file,
    conditionAlert,
    setConditionAlert,
    setFormData,
    formData,
    localisation,
    setContenu,
    contenu,
    file,
    setFile,
  };
  const ROLES = { SuperAdmin: 1, admin: 2, Famers: 3 };

  return (
    <DataMeteoContext.Provider value={{ dataMeteoContextValue }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes*/}
          <Route path="/login" element={<Login />} />
          <Route path="/enregister" element={<Singin />} />
          <Route path="/unauthorized" element={<Anauthorized />} />
          <Route path="/renitialiser" element={<ResetPassword />} />

          {/* Private routes*/}

          {/* Famers */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Famers]} />}>
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
            <Route path="/agriculteur/profile" element={<Profile />} />
          </Route>

          {/* Admin AND superAdmin */}
          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.SuperAdmin, ROLES.admin]} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<WeatherCard />} />
            <Route path="/localisation" element={<Localisation />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/parametre" element={<Parametre />} />
          </Route>

          <Route
            path="/"
            element={<RequireAuth allowedRoles={[ROLES.SuperAdmin]} />}
          >
            <Route path="/contenu" element={<Contenu />} />
            <Route path="/contenu/:stepNumber" element={<Step />} />
          </Route>
        </Route>
      </Routes>
    </DataMeteoContext.Provider>
  );
}

export default App;
