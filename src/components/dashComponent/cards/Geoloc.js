import L from "leaflet";
import React, { useContext, useEffect, useRef, useState } from "react";
import DataMeteoContext from "../../../context/MeteoContext";
import agripng from "../../../placeholder.png";
import communesHautKatanga from "../../../data/Coordonnees";
import { MoonLoader } from "react-spinners";

import "leaflet/dist/leaflet.css";

export default function Geoloc() {
  const mapRef = useRef(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    dataMeteoContextValue: { localisation },
  } = useContext(DataMeteoContext);
  console.log("localisationMap: ", localisation);

  useEffect(() => {
    if (localisation && mapRef.current && !mapInitialized) {
      const map = L.map(mapRef.current).setView(
        [localisation.latitude, localisation.longitude],
        6
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        // Ajoutez les options de la tuile si nécessaire
      }).addTo(map);

      const customMarkerIcon = L.icon({
        iconUrl: agripng,
        iconSize: [32, 32],
      });

      communesHautKatanga?.forEach((item) => {
        L.marker([item.latitude, item.longitude], { icon: customMarkerIcon })
          .addTo(map)
          .bindPopup(`${item.commune}`)
          .openPopup();
      });

      const polygon = L.polygon([
        [localisation.latitude, localisation.longitude - 0.002],
        [localisation.latitude - 0.002, localisation.longitude],
        [localisation.latitude, localisation.longitude + 0.002],
        [localisation.latitude + 0.002, localisation.longitude],
      ]).addTo(map);
      polygon.bindPopup("mesure 20/20");

      setMapInitialized(true);
      setLoading(false);
    } else if (!localisation) {
      setLoading(false);
      setError(true);
    }
  }, [localisation, mapInitialized]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-80 bg-gray-200">
        <p className="text-lg text-gray-600">
          Une erreur s'est produite lors de la récupération des données de
          localisation. Veuillez réessayer plus tard.
        </p>
      </div>
    );
  } else if (loading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-200">
        <MoonLoader color="#488575" />
      </div>
    );
  } else {
    return <div ref={mapRef} className="h-96 bg-gray-100 w-full" />;
  }
}
