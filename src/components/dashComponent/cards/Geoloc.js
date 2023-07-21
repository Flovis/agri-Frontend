import L from "leaflet";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import agripng from "../../../placeholder.png";
import { MoonLoader } from "react-spinners";
import { OurContext } from "../../../context/SelectContext";

export default function Geoloc() {
  const {
    groupe: { datafull, groupedUsers },
  } = useContext(OurContext);

  const canvasRef = useRef(null);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
      },
      userDecisionTimeout: 5000,
      watchPosition: true,
      geolocationProvider: navigator.geolocation,
      isOptimisticGeolocationEnabled: true,
      watchLocationPermissionChange: false,
    });

  const mapRef = useRef(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    if (coords && mapRef.current && !mapInitialized) {
      const map = L.map(mapRef.current).setView(
        [coords.latitude, coords.longitude],
        6
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
        map
      );
      const customMarkerIcon = L.icon({
        iconUrl: agripng,
        iconSize: [32, 32],
      });

      groupedUsers?.map((item) => {
        console.log("item: ", item);
        L.marker([item.latitude, item.longitude], {
          icon: customMarkerIcon,
        })
          .addTo(map)
          .bindPopup(`goupe ${item.name}:${datafull?.map((el) => el.username)}`)
          .openPopup();
        // map.flyTo([item.latitude, item.longitude], 10);
      });

      setMapInitialized(true);
    }
  }, [coords, mapInitialized]);
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.addEventListener("wheel", (e) => {
        e.stopPropagation();
      });
    }
  }, []);

  if (!isGeolocationAvailable) {
    return (
      <div className="flex justify-center items-center h-80 ">
        <p className="text-lg text-text-gray">
          Désolé, la géolocalisation n'est pas prise en charge par votre
          appareil.
        </p>
      </div>
    );
  } else if (!isGeolocationEnabled) {
    return (
      <div className="flex justify-center items-center h-80 bg-gray-200">
        <div className="flex justify-center items-center h-full flex-col">
          <p className="text-sm text-text-gray text-center mx-10">
            Veuillez activer la géolocalisation dans les paramètres de votre
            appareil.
          </p>

          <MoonLoader color="#488575" />
        </div>
      </div>
    );
  } else if (coords) {
    return <div ref={mapRef} className="h-96 " />;
  } else {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-200">
        <div className="flex justify-center items-center h-full">
          <MoonLoader color="#488575" />
        </div>
      </div>
    );
  }
}
