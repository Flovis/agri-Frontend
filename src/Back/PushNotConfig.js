import axios from "axios";
import { Notyf } from "notyf";
import { useContext, useEffect, useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { io } from "socket.io-client";
import DataMeteoContext from "../context/MeteoContext";
import not from "./not.wav";

export default function PushNotConfig() {
  const { setnotification } = useContext(DataMeteoContext);
  const [weatherUpdate, setWeatherUpdate] = useState(null);
  const { forecast } = useContext(DataMeteoContext);
  var notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const handlePagner = () => {
    setnotification((count) => count + 1);
  };

  const sendDataToBack = async (forecast) => {
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:4000/api/dataforecast", forecast, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const socket = io("http://localhost:4000/");

    socket.on("connect", () => {
      //   const data = 9;
      //   socket.broadcast.emit("getdData", data);
      //   sendDataToBack(forecast);
      return notyf.success("Tu es connecté au serveur ");
    });

    socket.on("disconnect", () => {
      return notyf.error("Tu es déconnecté du serveur");
    });

    socket.on("weatherUpdate", (weatherData) => {
      setWeatherUpdate(weatherData);

      setTimeout(() => {
        setWeatherUpdate(null);
      }, 5000);

      handlePagner();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {weatherUpdate && (
        <div className="bg-custom-white rounded-lg shadow-md p-4 flex mx-4 absolute items-center">
          <div className="bg-custom-red text-custom-white rounded-full p-2 mr-4">
            <BsFillBellFill />
          </div>
          <div>
            <h4 className="text-text-gray font-bold">Notification</h4>
            <p className="text-text-gray">{weatherUpdate.description}</p>
          </div>
          {/* Lecture de la sonnerie */}
          {weatherUpdate && <audio src={not} autoPlay />}
        </div>
      )}
    </div>
  );
}
