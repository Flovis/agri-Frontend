import Chart from "chart.js/auto";
import React, { useContext, useEffect, useRef, useState } from "react";
import communesHautKatanga from "../../../data/Coordonnees";
import { OurContext } from "../../../context/SelectContext";
import { backendAxios } from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import ROLES from "../../../pages/login/role";

const SumilationCoords = () => {
    const { auth } = useAuth();
    const URL =
        auth?.role === ROLES.Admin
            ? ` /allLocation/${auth.id_organisation}`
            : `/allLocation`;
    const [datass, setData] = useState();

    // console.log("data: ", data);

    const canvasRef = useRef(null);
    const chartRef = useRef(null);
    const { groupe, setGroupe } = useContext(OurContext);
    console.log("groupe", groupe);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await backendAxios.get(URL, {
                    headers: { "Content-Type": "application/json" },
                });
                setData(response?.data?.data);
                console.log("all", response?.data?.data);

                // const groupedCommunes = groupCommunes(data);

                const labels = Object.keys(groupedCommunes);
                const data = Object.values(groupedCommunes).map(
                    (group) => group.length
                );

                const chartConfig = {
                    type: "doughnut",
                    data: {
                        labels,
                        datasets: [
                            {
                                label: "Nombre de communes",
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
        groupCommunes(datass);
    }, []);

    const groupCommunes = (communes) => {
        console.log("communes", communes);
        const groupedCommunes = {};

        communes?.map((commune) => {
            const groupe = `Groupe ${Math.ceil(commune.Localisation.latitude)}`;
            console.log("groupe", groupe);
            setGroupe(groupe);
            if (groupe && groupedCommunes[groupe]) {
                groupedCommunes[groupe].push(commune);
            } else {
                groupedCommunes[groupe] = [commune];
            }
            // console.log("commune", commune);
        });

        return groupedCommunes;
    };

    return <canvas ref={canvasRef}></canvas>;
};

export default SumilationCoords;
