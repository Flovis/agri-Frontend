import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { backendAxios } from "../../../api/axios";

export default function DashCard() {
    const STATISTICS_URL = "/statistics";

    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        fectData();
    }, []);

    const fectData = async () => {
        try {
            const data = await backendAxios.get(STATISTICS_URL, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(data?.data);
            setStatistics(data?.data);
            console.log(statistics);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-2">
            {/* Section Aperçu */}
            <section className=" rounded-lg  mb-8">
                <h2 className="text-xl font-bold mb-4">Aperçu</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-custom-white">
                    <div className="bg-deep-green text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Agriculteurs</h3>
                        <p className="text-2xl">
                            <CountUp
                                end={statistics.agriculteurs || 0}
                                duration={2.5}
                            />
                        </p>
                    </div>
                    <div className="bg-[#3B82F6] text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Champs</h3>
                        <p className="text-2xl">
                            <CountUp
                                end={statistics.agriculteurs || 0}
                                duration={2.5}
                            />
                        </p>
                    </div>
                    <div className="bg-[#FFD700] text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Cultures</h3>
                        <p className="text-2xl">
                            <CountUp
                                end={statistics.cultures || 0}
                                duration={2.5}
                            />
                        </p>
                    </div>
                    <div className="bg-[#8B5CF6] text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Récoltes</h3>
                        <p className="text-2xl">
                            {" "}
                            <CountUp
                                end={statistics.recoltes || 0}
                                duration={2.5}
                            />
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Groupes d'agriculteurs */}
        </div>
    );
}
