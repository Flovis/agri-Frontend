import React, { useContext } from "react";
import DataMeteoContext from "../../../context/MeteoContext";

export default function Condition() {
  const { setConditionAlert } = useContext(DataMeteoContext);
  //   const condition = new Set(forecast?.map((meteo) => meteo.condition));

  //   function conditionAlert(condition, temp) {
  //     let cond = "";
  //     let message = "";

  //     if (condition === "clear sky") {
  //       cond = "ciel dégagé";
  //       if (temp >= 19) {
  //         message =
  //           "Cette nuit, le ciel sera dégagé, offrant une vue magnifique sur les étoiles. Profitez-en pour observer vos cultures et planifier vos activités agricoles nocturnes.";
  //       } else {
  //         message =
  //           "Aujourd'hui, le ciel sera dégagé, offrant une journée ensoleillée idéale pour les travaux agricoles en plein air. Protégez-vous du soleil et profitez d'une productivité maximale !";
  //       }
  //     } else if (condition === "broken clouds") {
  //       cond = "Nuages brisés";
  //       if (temp >= 19) {
  //         message = "Profitez d'une nuit avec un ciel dégagé";
  //       } else {
  //         message = "Profitez d'une journée ensoleillée avec un ciel dégagé";
  //       }
  //     } else if (condition === "scattered clouds") {
  //       cond = "Nuages dispersés";
  //       if (temp >= 19) {
  //         message =
  //           "La nuit sera caractérisée par des nuages brisés. Gardez un œil sur les éventuelles éclaircies pour mener à bien vos activités agricoles nocturnes. Assurez-vous d'avoir des sources lumineuses supplémentaires si nécessaire.";
  //       } else {
  //         message =
  //           "Le ciel alternera entre éclaircies et passages nuageux aujourd'hui. Soyez prêt à adapter vos plans en fonction des variations météorologiques. Profitez des périodes ensoleillées pour maximiser votre productivité agricole.";
  //       }
  //     } else if (condition === "few clouds") {
  //       cond = "Quelques nuages";
  //       if (temp >= 19) {
  //         message =
  //           "La nuit sera caractérisée par des nuages brisés. Gardez un œil sur les éventuelles éclaircies pour mener à bien vos activités agricoles nocturnes. Assurez-vous d'avoir des sources lumineuses supplémentaires si nécessaire.";
  //       } else {
  //         message =
  //           "Le ciel alternera entre éclaircies et passages nuageux aujourd'hui. Soyez prêt à adapter vos plans en fonction des variations météorologiques. Profitez des périodes ensoleillées pour maximiser votre productivité agricole.";
  //       }
  //     } else if (condition.includes("rain")) {
  //       cond = "Précipitations";
  //       if (temp >= 19) {
  //         message =
  //           "Chers agriculteurs, des précipitations sont prévues cette nuit dans votre région. Les prévisions météorologiques indiquent une probabilité de pluie significative pendant les heures nocturnes. Il est essentiel de prendre des mesures pour protéger vos cultures des intempéries. Vérifiez que vos systèmes de drainage sont en bon état et assurez-vous que vos cultures sensibles soient protégées par des bâches ou d'autres méthodes appropriées. Soyez prêt à ajuster vos plans en fonction des conditions météorologiques et consultez les mises à jour régulières pour suivre l'évolution de la situation. Restez vigilant et prenez les mesures nécessaires pour minimiser les impacts de la pluie sur vos activités agricoles nocturnes.";
  //       } else {
  //         message =
  //           "Attention agriculteurs, des précipitations sont prévues dans votre région aujourd'hui. Selon les prévisions météorologiques, la probabilité de pluie est élevée. Assurez-vous d'adapter vos plans en conséquence et prenez les mesures nécessaires pour protéger vos cultures des intempéries. Prévoyez des abris pour le matériel et le bétail si nécessaire. Restez vigilant et consultez les mises à jour météorologiques régulières pour vous tenir informé des évolutions de la situation.";
  //       }
  //     }

  //     return { condition: cond, message: message };
  //   }

  return <></>;
}
