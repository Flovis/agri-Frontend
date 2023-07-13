import React, { useContext, useState } from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import DataMeteoContext from "../../../../context/MeteoContext";
import { useNavigate } from "react-router";
import { Notyf } from "notyf";
import { backendAxios } from "../../../../api/axios";

export default function GetForm() {
    const [step, setStep] = useState(1);
    const [formObject, setFormObject] = useState({});
    const navigate = useNavigate();
    const CONTENT_URL = "/addContents";

    const notyf = new Notyf({
        duration: 1000,
        position: {
            x: "right",
            y: "top",
        },
    });
    // console.log("formObject: ", formObject);
    const {
        dataMeteoContextValue: { setContenu, contenu },
    } = useContext(DataMeteoContext);
    // console.log("contenuherve", contenu);
    const handleNext = (data) => {
        setStep((prev) => prev + 1);
        setFormObject((prevFormObject) => ({
            ...prevFormObject,
            ...data,
        }));
    };
    const handlePrevious = (data) => {
        setStep((prev) => prev - 1);
        setFormObject((prevFormObject) => ({
            ...prevFormObject,
            ...data,
        }));
        setContenu([]);
    };
    const handleSubmit = async (data) => {
        const updatedFormObject = { ...formObject, ...data };
        setFormObject(updatedFormObject);
        // setContenu((prevRecordings) => [...prevRecordings, updatedFormObject]);
        const formData = new FormData();
        for (const key in updatedFormObject) {
            formData.append(key, updatedFormObject[key]);
        }
        if (formData) {
            try {
                const response = await backendAxios.post(
                    CONTENT_URL,
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
                notyf.success("Un nouveau contenu a été ajouté");

                console.log(updatedFormObject);

                navigate("/contenu");
            } catch (error) {
                console.log(error);
                notyf.error("Erreur lors d'ajout du contenu");
            }
        }
        // console.log("formData", formData.get("file"));
    };
    return (
        <div>
            {step === 1 && (
                <Level1 onNext={handleNext} onPrevious={handlePrevious} />
            )}
            {step === 2 && (
                <Level2
                    onPrevious={handlePrevious}
                    onSubmit={handleSubmit}
                    formObject={formObject}
                />
            )}
        </div>
    );
}
