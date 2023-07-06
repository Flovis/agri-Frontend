import L from "leaflet";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import agripng from "../../../placeholder.png";
import { MoonLoader } from "react-spinners";

import communesHautKatanga from "../../../data/Coordonnees";

export default function Geoloc() {
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

      communesHautKatanga?.map((item) => {
        L.marker([item.latitude, item.longitude], { icon: customMarkerIcon })
          .addTo(map)
          .bindPopup(`${item.commune}`)
          .openPopup();
        // map.flyTo([item.latitude, item.longitude], 10);
      });

      // const polygon = L.polygon([
      //   [coords.latitude, coords.longitude - 0.002],
      //   [coords.latitude - 0.002, coords.longitude],
      //   [coords.latitude, coords.longitude + 0.002],
      //   [coords.latitude + 0.002, coords.longitude],
      // ]).addTo(map);
      // polygon.bindPopup("mesure 20/20");

      setMapInitialized(true);
    }
  }, [coords, mapInitialized]);

  if (!isGeolocationAvailable) {
    return (
      <div className="flex justify-center items-center h-80 bg-gray-200">
        <p className="text-lg text-gray-600">
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
    return <div ref={mapRef} className="h-96 bg-gray-100" />;
  } else {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-200">
        <div className="flex justify-center items-center h-full">
          <MoonLoader color="#488575" />
        </div>
        {/* <p className="text-lg text-gray-600">
          Récupération des données de localisation...
        </p> */}
      </div>
    );
  }
}
