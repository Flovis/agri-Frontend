import React, { useState } from "react";
import DynamicInput from "../../PublicComponent/DynamicInput";
import DynamicSelect from "../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../PublicComponent/DynamicButton ";
import TopHeader from "../../header/TopHeader";
import BackNavStep from "../../header/BackNav";
import DynamicDataSet from "../../PublicComponent/DynamicDataSet";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useNavigate } from "react-router-dom";

const Level2 = ({ onPrevious, onSubmit, formObject }) => {
    const navigate = new useNavigate();
    const [form, setform] = useState("");
    const [editor, seteditor] = useState("");

    const notyf = new Notyf({
        duration: 1000,
        position: {
            x: "right",
            y: "top",
        },
    });

    const handlePrevious = () => {
        navigate(`/contenu/getform`);
        onPrevious(form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        if (formObject.category === "textuel") {
            formdata.set("contentText", editor);
        }
        const data = Object.fromEntries(formdata);
        if (data.productName === "" || data.tag === "") {
            notyf.error("veillez remplir les champs svp");
          } else {
            setform(data);
            onSubmit(data);
        }
        // navigate(`/contenu/${defaultType}`);
    };

    return (
        <>
            {/* Top header */}
            <div className="z-50 fixed h-18  top-0 bg-custom-white w-full shadow-md">
                <TopHeader />
                <BackNavStep
                    title="Ajout Contenu"
                    classes="hidden"
                    // type={defaultType}
                    linkTo={`/contenu/getform`}
                    handlePrevious={handlePrevious}
                />
            </div>

            <main className=" mb-5 mt-28 w-full  flex flex-col justify-center px-4 items-center">
                <div className="max-w-sm w-full text-gray-600">
                    <div className="-mb-3">
                        <div className="mt-5 space-y-1">
                            <h3 className="text-text-gray text-md font-bold sm:text-xl ">
                                Informations complémentaires
                            </h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-4 space-y-5">
                        <div>
                            <DynamicDataSet label="Sélectionner le produit" />
                        </div>
                        <div>
                            <DynamicInput
                                label="Ajouter un fichier media"
                                type={formObject.category}
                                seteditor={seteditor}
                                editor={editor}
                            />
                        </div>
                        <div>
                            <DynamicSelect
                                label="Sélectionner le tag"
                                options={["Option 1", "Option 2", "Option 3"]}
                                nameData="tag"
                            />
                        </div>
                        <div>
                            <DynamicSelect
                                label="Sélectionner la langue"
                                options={[
                                    "Francais",
                                    "Anglais",
                                    "Lingala",
                                    "swahili",
                                ]}
                                nameData="language"
                            />
                        </div>
                        <div>
                            <DynamicButton
                                label="Enregistrer"
                                getsizeClasses="w-full "
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Level2;
