import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import WeatherCard from "./components/dashComponent/cards/WeatherCard";
import DataMeteoContext from "./context/Contex";
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
  const [meteo, setMeteo] = useState();

  useEffect(() => {
    getMeteo();
  }, []);

  async function getMeteo() {
    try {
      const response = await axios({
        method: "GET",
        baseURL:
          "https://api.agromonitoring.com/agro/1.0/weather?lat=35&lon=139&appid=6fec80ebc7a554972ea6f8fe550c8de1",
        headers: {
          Accept: "application/json",
        },
      });

      setMeteo(response.data);
      console.log("response.data: ", response.data);
    } catch (error) {
      console.error("Problem retrieving weather data");
      throw error;
    }
  }

  return (
    <DataMeteoContext.Provider value={{ meteo, setMeteo }}>
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

        {/* part 2 */}

        <Route path="/dashboard" element={<WeatherCard />} />
        <Route path="/dashboard/contenu" element={<Contenu />} />
        <Route path="/dashboard/localisation" element={<Localisation />} />
        <Route path="/dashboard/alert" element={<Alert />} />
        <Route path="/dashboard/parametre" element={<Parametre />} />
      </Routes>
    </DataMeteoContext.Provider>
  );
}

export default App;
