import Chart from "chart.js/auto";
import React, { useContext, useEffect, useRef, useState } from "react";
// import communesHautKatanga from "../../../data/Coordonnees";
import { OurContext } from "../../../context/SelectContext";
import { backendAxios } from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import ROLES from "../../../pages/login/role";

const SumilationCoords = () => {
  const { auth } = useAuth();
  const URL =
    auth?.role === ROLES.Admin
      ? `/allLocation/${auth.id_organisation}`
      : `/allLocation`;

  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const { setGroupe } = useContext(OurContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await backendAxios.get(URL, {
          headers: { "Content-Type": "application/json" },
        });

        const distanceThreshold = 100;
        const groupedUsers = groupUsers(
          response?.data?.data,
          distanceThreshold
        );

        setGroupe({
          groupedUsers: groupedUsers,
          datafull: response?.data?.data,
        });

        const labels = groupedUsers?.map((group) => group.name);
        const data = groupedUsers?.map((group) => {
          return group && group.length > 0 ? group.length : 1;
        });

        const chartConfig = {
          type: "doughnut",
          data: {
            labels,
            datasets: [
              {
                label: "Nombre de groupe",
                data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                ],
              },
            ],
          },
        };

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, chartConfig);
      } catch (error) {
        console.log("error localisation", error);
      }
    };

    fetchData();
    // groupCommunes(datass);
  }, []);

  // ------------------------------------------------------------------

  function distanceBetweenCoordinates(user1, user2) {
    const R = 6371.0; // Rayon de la Terre en kilomètres

    const lat1 = toRadians(user1.latitude);
    const lon1 = toRadians(user1.longitude);
    const lat2 = toRadians(user2.latitude);
    const lon2 = toRadians(user2.longitude);

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function groupUsers(array, distanceThreshold) {
    const groups = [];

    for (let i = 0; i < array.length; i++) {
      const user1 = array[i].Localisation;

      let foundGroup = false;

      // Vérifier si l'utilisateur peut être ajouté à un groupe existant.
      for (let j = 0; j < groups.length; j++) {
        const usersInGroup = groups[j];
        // console.log("usersInGroup: ", usersInGroup);

        const user2 = usersInGroup;

        const distance = distanceBetweenCoordinates(user1, user2);

        if (distance <= distanceThreshold) {
          groups[j].push(user1);
          foundGroup = true;
          break;
        }
      }

      // Si l'utilisateur n'appartient à aucun groupe existant, créer un nouveau groupe pour lui.
      if (!foundGroup) {
        groups.push(user1);
      }
    }

    return groups;
  }

  return <canvas ref={canvasRef}></canvas>;
};

export default SumilationCoords;
