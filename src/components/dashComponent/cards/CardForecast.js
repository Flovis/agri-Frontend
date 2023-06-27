import { useContext } from "react";
import DataMeteoContext from "../../../context/MeteoContext";
import CardDay from "./CardDay";

const CardForecast = () => {
  const { forecast, setConditionAlert } = useContext(DataMeteoContext);
  const resultat = {};

  for (let i = 0; i < forecast?.length; i++) {
    const jour = forecast[i].jour;
    const heure = forecast[i].heure;
    const temperature = forecast[i].temperature;
    const condition = forecast[i].condition;

    if (!resultat[jour]) {
      resultat[jour] = [];
    }

    resultat[jour].push({ heure, temperature, condition });
  }

  // function conditionAlert(condition, temp) {
  //   let cond = "";
  //   let message = "";

  //   if (condition === "clear sky") {
  //     cond = "ciel dégagé";
  //     if (temp >= 19) {
  //       message =
  //         "Cette nuit, le ciel sera dégagé, offrant une vue magnifique sur les étoiles. Profitez-en pour observer vos cultures et planifier vos activités agricoles nocturnes.";
  //     } else {
  //       message =
  //         "Aujourd'hui, le ciel sera dégagé, offrant une journée ensoleillée idéale pour les travaux agricoles en plein air. Protégez-vous du soleil et profitez d'une productivité maximale !";
  //     }
  //   } else if (condition === "broken clouds") {
  //     cond = "Nuages brisés";
  //     if (temp >= 19) {
  //       message = "Profitez d'une nuit avec un ciel dégagé";
  //     } else {
  //       message = "Profitez d'une journée ensoleillée avec un ciel dégagé";
  //     }
  //   } else if (condition === "scattered clouds") {
  //     cond = "Nuages dispersés";
  //     if (temp >= 19) {
  //       message =
  //         "La nuit sera caractérisée par des nuages brisés. Gardez un œil sur les éventuelles éclaircies pour mener à bien vos activités agricoles nocturnes. Assurez-vous d'avoir des sources lumineuses supplémentaires si nécessaire.";
  //     } else {
  //       message =
  //         "Le ciel alternera entre éclaircies et passages nuageux aujourd'hui. Soyez prêt à adapter vos plans en fonction des variations météorologiques. Profitez des périodes ensoleillées pour maximiser votre productivité agricole.";
  //     }
  //   } else if (condition === "few clouds") {
  //     cond = "Quelques nuages";
  //     if (temp >= 19) {
  //       message =
  //         "La nuit sera caractérisée par des nuages brisés. Gardez un œil sur les éventuelles éclaircies pour mener à bien vos activités agricoles nocturnes. Assurez-vous d'avoir des sources lumineuses supplémentaires si nécessaire.";
  //     } else {
  //       message =
  //         "Le ciel alternera entre éclaircies et passages nuageux aujourd'hui. Soyez prêt à adapter vos plans en fonction des variations météorologiques. Profitez des périodes ensoleillées pour maximiser votre productivité agricole.";
  //     }
  //   } else if (condition.includes("rain")) {
  //     cond = "Précipitations";
  //     if (temp >= 19) {
  //       message =
  //         "Chers agriculteurs, des précipitations sont prévues cette nuit dans votre région. Les prévisions météorologiques indiquent une probabilité de pluie significative pendant les heures nocturnes. Il est essentiel de prendre des mesures pour protéger vos cultures des intempéries. Vérifiez que vos systèmes de drainage sont en bon état et assurez-vous que vos cultures sensibles soient protégées par des bâches ou d'autres méthodes appropriées. Soyez prêt à ajuster vos plans en fonction des conditions météorologiques et consultez les mises à jour régulières pour suivre l'évolution de la situation. Restez vigilant et prenez les mesures nécessaires pour minimiser les impacts de la pluie sur vos activités agricoles nocturnes.";
  //     } else {
  //       message =
  //         "Attention agriculteurs, des précipitations sont prévues dans votre région aujourd'hui. Selon les prévisions météorologiques, la probabilité de pluie est élevée. Assurez-vous d'adapter vos plans en conséquence et prenez les mesures nécessaires pour protéger vos cultures des intempéries. Prévoyez des abris pour le matériel et le bétail si nécessaire. Restez vigilant et consultez les mises à jour météorologiques régulières pour vous tenir informé des évolutions de la situation.";
  //     }
  //   }

  // return { condition: cond, message: message };
  // }

  return (
    <CardDay tableau={resultat} />
    // <ul className="grid grid-cols-3">
    //   {forecast?.map((meteo, index) => {
    //     const { condition, heure, jour, temperature } = meteo;
    //     // conditionAlert(condition, temperature);

    //     // setConditionAlert({ condition: cond, message });
    //     return (
    //       <div
    //         key={index}
    //         className="bg-white w-[100px] border border-borde-gray text-md rounded-lg p-4 mx-px mb-4"
    //       >
    //         <div className="flex flex-col items-center justify-between mb-4">
    //           <p className="text-sm font-semibold">{jour}</p>
    //           <p className="text-sm font-semibold">{heure}:00</p>
    //           {/* <p className="text-sm font-semibold">{cond}</p> */}
    //           <p className="text-md text-center font-bold">{temperature}</p>
    //         </div>
    //         {/* <p className="text-sm">{message}</p> */}
    //       </div>
    //     );
    //   })}
    // </ul>
  );
};

export default CardForecast;
