import L from "leaflet";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useGeolocated } from "react-geolocated";
import agripng from "../../../agri.gif";
import DataMeteoContext from "../../../context/MeteoContext";

export const communesHautKatanga = [
  { commune: "Lubumbashi", latitude: -11.6609, longitude: 27.4794 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Tanganyika", latitude: -8.7495, longitude: 28.6091 },
  { commune: "Kamina", latitude: -8.7389, longitude: 25.0033 },
  { commune: "Mokambo", latitude: -10.9587, longitude: 28.7369 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Pweto", latitude: -8.4554, longitude: 28.8995 },
  { commune: "Sakania", latitude: -11.8882, longitude: 27.6474 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Sandoa", latitude: -10.3016, longitude: 23.2274 },
  { commune: "Kalubwe", latitude: -11.3441, longitude: 27.8921 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Dikulushi", latitude: -10.7485, longitude: 27.7262 },
  { commune: "Lualaba", latitude: -7.9161, longitude: 25.8005 },
  { commune: "Mwadingusha", latitude: -11.7602, longitude: 27.3799 },
  { commune: "Kakanda", latitude: -11.2614, longitude: 27.1744 },
  { commune: "Lupoto", latitude: -10.4606, longitude: 27.5348 },
  { commune: "Kalima", latitude: -8.8134, longitude: 29.6946 },
  { commune: "Kakontwe", latitude: -8.4962, longitude: 29.2191 },
  { commune: "Mushonoi", latitude: -10.6585, longitude: 27.4918 },
  { commune: "Kyubo", latitude: -9.2745, longitude: 25.8152 },
  { commune: "Nyemba", latitude: -10.0736, longitude: 27.7323 },
  { commune: "Kalumba", latitude: -9.9257, longitude: 25.8555 },
  { commune: "Kisenda", latitude: -9.9639, longitude: 25.9931 },
  { commune: "Kalebuka", latitude: -11.7836, longitude: 27.2576 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Musumba", latitude: -9.2459, longitude: 25.6848 },
  { commune: "Kapemba", latitude: -8.5257, longitude: 27.4003 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kafubu", latitude: -11.6266, longitude: 27.3005 },
  { commune: "Mumbunda", latitude: -10.4379, longitude: 27.6079 },
  { commune: "Mutanda", latitude: -10.6964, longitude: 26.4838 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Kyekese", latitude: -10.2502, longitude: 27.4754 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Kama", latitude: -10.5276, longitude: 27.5693 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Samba", latitude: -7.045, longitude: 29.7865 },
  { commune: "Kapolowe", latitude: -9.2445, longitude: 25.7803 },
  { commune: "Lusinga", latitude: -8.3019, longitude: 25.9561 },
  { commune: "Kasenga", latitude: -10.1709, longitude: 28.738 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Manika", latitude: -10.73, longitude: 26.6172 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Mumbeji", latitude: -9.4452, longitude: 26.3965 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Kalunga", latitude: -9.2039, longitude: 25.6264 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Kabalo", latitude: -6.05, longitude: 26.9167 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Lubumbashi", latitude: -11.6609, longitude: 27.4794 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Tanganyika", latitude: -8.7495, longitude: 28.6091 },
  { commune: "Kamina", latitude: -8.7389, longitude: 25.0033 },
  { commune: "Mokambo", latitude: -10.9587, longitude: 28.7369 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Pweto", latitude: -8.4554, longitude: 28.8995 },
  { commune: "Sakania", latitude: -11.8882, longitude: 27.6474 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Sandoa", latitude: -10.3016, longitude: 23.2274 },
  { commune: "Kalubwe", latitude: -11.3441, longitude: 27.8921 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Dikulushi", latitude: -10.7485, longitude: 27.7262 },
  { commune: "Lualaba", latitude: -7.9161, longitude: 25.8005 },
  { commune: "Mwadingusha", latitude: -11.7602, longitude: 27.3799 },
  { commune: "Kakanda", latitude: -11.2614, longitude: 27.1744 },
  { commune: "Lupoto", latitude: -10.4606, longitude: 27.5348 },
  { commune: "Kalima", latitude: -8.8134, longitude: 29.6946 },
  { commune: "Kakontwe", latitude: -8.4962, longitude: 29.2191 },
  { commune: "Mushonoi", latitude: -10.6585, longitude: 27.4918 },
  { commune: "Kyubo", latitude: -9.2745, longitude: 25.8152 },
  { commune: "Nyemba", latitude: -10.0736, longitude: 27.7323 },
  { commune: "Kalumba", latitude: -9.9257, longitude: 25.8555 },
  { commune: "Kisenda", latitude: -9.9639, longitude: 25.9931 },
  { commune: "Kalebuka", latitude: -11.7836, longitude: 27.2576 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Musumba", latitude: -9.2459, longitude: 25.6848 },
  { commune: "Kapemba", latitude: -8.5257, longitude: 27.4003 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kafubu", latitude: -11.6266, longitude: 27.3005 },
  { commune: "Mumbunda", latitude: -10.4379, longitude: 27.6079 },
  { commune: "Mutanda", latitude: -10.6964, longitude: 26.4838 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Kyekese", latitude: -10.2502, longitude: 27.4754 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Kama", latitude: -10.5276, longitude: 27.5693 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Samba", latitude: -7.045, longitude: 29.7865 },
  { commune: "Kapolowe", latitude: -9.2445, longitude: 25.7803 },
  { commune: "Lusinga", latitude: -8.3019, longitude: 25.9561 },
  { commune: "Kasenga", latitude: -10.1709, longitude: 28.738 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Manika", latitude: -10.73, longitude: 26.6172 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Mumbeji", latitude: -9.4452, longitude: 26.3965 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Kalunga", latitude: -9.2039, longitude: 25.6264 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Kabalo", latitude: -6.05, longitude: 26.9167 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Lubumbashi", latitude: -11.6609, longitude: 27.4794 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Tanganyika", latitude: -8.7495, longitude: 28.6091 },
  { commune: "Kamina", latitude: -8.7389, longitude: 25.0033 },
  { commune: "Mokambo", latitude: -10.9587, longitude: 28.7369 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Pweto", latitude: -8.4554, longitude: 28.8995 },
  { commune: "Sakania", latitude: -11.8882, longitude: 27.6474 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Kasaji", latitude: -10.8103, longitude: 27.5708 },
  { commune: "Sandoa", latitude: -10.3016, longitude: 23.2274 },
  { commune: "Kalubwe", latitude: -11.3441, longitude: 27.8921 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Dikulushi", latitude: -10.7485, longitude: 27.7262 },
  { commune: "Lualaba", latitude: -7.9161, longitude: 25.8005 },
  { commune: "Mwadingusha", latitude: -11.7602, longitude: 27.3799 },
  { commune: "Kakanda", latitude: -11.2614, longitude: 27.1744 },
  { commune: "Lupoto", latitude: -10.4606, longitude: 27.5348 },
  { commune: "Kalima", latitude: -8.8134, longitude: 29.6946 },
  { commune: "Kakontwe", latitude: -8.4962, longitude: 29.2191 },
  { commune: "Mushonoi", latitude: -10.6585, longitude: 27.4918 },
  { commune: "Kyubo", latitude: -9.2745, longitude: 25.8152 },
  { commune: "Nyemba", latitude: -10.0736, longitude: 27.7323 },
  { commune: "Kalumba", latitude: -9.9257, longitude: 25.8555 },
  { commune: "Kisenda", latitude: -9.9639, longitude: 25.9931 },
  { commune: "Kalebuka", latitude: -11.7836, longitude: 27.2576 },
  { commune: "Dilolo", latitude: -10.7076, longitude: 22.3282 },
  { commune: "Musumba", latitude: -9.2459, longitude: 25.6848 },
  { commune: "Kapemba", latitude: -8.5257, longitude: 27.4003 },
  { commune: "Mitwaba", latitude: -9.7332, longitude: 25.8522 },
  { commune: "Kafubu", latitude: -11.6266, longitude: 27.3005 },
  { commune: "Mumbunda", latitude: -10.4379, longitude: 27.6079 },
  { commune: "Mutanda", latitude: -10.6964, longitude: 26.4838 },
  { commune: "Manono", latitude: -7.2907, longitude: 27.3986 },
  { commune: "Kyekese", latitude: -10.2502, longitude: 27.4754 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Kama", latitude: -10.5276, longitude: 27.5693 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Moba", latitude: -7.0469, longitude: 29.7596 },
  { commune: "Samba", latitude: -7.045, longitude: 29.7865 },
  { commune: "Kapolowe", latitude: -9.2445, longitude: 25.7803 },
  { commune: "Lusinga", latitude: -8.3019, longitude: 25.9561 },
  { commune: "Kasenga", latitude: -10.1709, longitude: 28.738 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Mukanga", latitude: -11.6208, longitude: 27.3665 },
  { commune: "Manika", latitude: -10.73, longitude: 26.6172 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Mumbeji", latitude: -9.4452, longitude: 26.3965 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Shinkolobwe", latitude: -11.8204, longitude: 27.2406 },
  { commune: "Kalunga", latitude: -9.2039, longitude: 25.6264 },
  { commune: "Lumbubashi", latitude: -10.34, longitude: 26.3667 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kando", latitude: -11.1044, longitude: 27.2742 },
  { commune: "Mutshatsha", latitude: -10.3982, longitude: 27.7048 },
  { commune: "Bukama", latitude: -9.2059, longitude: 25.8567 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
  { commune: "Nyunzu", latitude: -5.9539, longitude: 26.005 },
  { commune: "Kabalo", latitude: -6.05, longitude: 26.9167 },
  { commune: "Kolwezi", latitude: -10.7063, longitude: 25.4679 },
  { commune: "Kambove", latitude: -10.8726, longitude: 26.5945 },
  { commune: "Likasi", latitude: -10.9817, longitude: 26.7383 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Kasumbalesa", latitude: -12.5728, longitude: 27.8551 },
  { commune: "Kipushi", latitude: -11.7708, longitude: 27.2577 },
  { commune: "Mutoshi", latitude: -10.6519, longitude: 26.7973 },
  { commune: "Kapata", latitude: -8.7089, longitude: 27.3049 },
  { commune: "Kasongo", latitude: -4.45, longitude: 26.6667 },
];

export default function Geoloc({ communesHautKatanga }) {
  const { setCoords } = useContext(DataMeteoContext);
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
        13
      );

      setCoords(coords);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
        map
      );
      const customMarkerIcon = L.icon({
        iconUrl: agripng,
        iconSize: [32, 32],
      });
      L.marker([coords.latitude, coords.longitude], { icon: customMarkerIcon })
        .addTo(map)
        .bindPopup("herve agriculteur")
        .openPopup();
      const polygon = L.polygon([
        [coords.latitude, coords.longitude - 0.002],
        [coords.latitude - 0.002, coords.longitude],
        [coords.latitude, coords.longitude + 0.002],
        [coords.latitude + 0.002, coords.longitude],
      ]).addTo(map);
      polygon.bindPopup("mesure 20/20");
      map.flyTo([coords.latitude, coords.longitude], 15);
      setMapInitialized(true);
    }
  }, [coords, mapInitialized]);

  if (!isGeolocationAvailable) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-200">
        <p className="text-lg text-gray-600">
          Désolé, la géolocalisation n'est pas prise en charge par votre
          appareil.
        </p>
      </div>
    );
  } else if (!isGeolocationEnabled) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-200">
        <p className="text-lg text-gray-600">
          Veuillez activer la géolocalisation dans les paramètres de votre
          appareil.
        </p>
      </div>
    );
  } else if (coords) {
    return <div ref={mapRef} className="h-64 bg-gray-100" />;
  } else {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-200">
        <p className="text-lg text-gray-600">
          Récupération des données de localisation...
        </p>
      </div>
    );
  }
}
