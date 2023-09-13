import React, { useContext, useEffect, useState } from "react";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import DynamicTextarea from "../../../PublicComponent/DynamicTextarea ";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import { useNavigate } from "react-router-dom";
import ModalContenu from "../../../Modal/ModalContenu";
import DynamicSelect from "../../../PublicComponent/DynamicSelect ";
import CardMeteo from "../../../retouche/CardMeteo";
import { TbAirConditioning } from "react-icons/tb";
import ModalCondition from "../../../Modal/ModalCondition";
import DataMeteoContext from "../../../../../context/MeteoContext";
import { Notyf } from "notyf";
import { backendAxios } from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";

export default function ConfigMeteo() {
    const [isOpen, setIsOpen] = useState(false);
    const [Open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const [condition, setCondition] = useState({});

    const navigate = useNavigate();

    const { auth } = useAuth();
    const idUser = auth.id;
    const idOrganisation = auth?.id_organisation;

    const POST_CONFIGS_URL = "/addMeteoConfig";
    const GET_CONFIGS_URL = `/getMeteoConfig/${idUser}`;
    const GET_PRODUCTS_URL = "/allProductsPlan";

    const notyf = new Notyf({
        duration: 3000,
        position: {
            x: "right",
            y: "top",
        },
    });

    const {
        dataMeteoContextValue: { forecast },
    } = useContext(DataMeteoContext);

    useEffect(() => {
        let sorts = {};

        for (let item of forecast) {
            const condition = {
                condition: item.condition,
                heure: item.hour,
            };
            if (item.day in sorts) {
                let can_add = true;
                for (let key in sorts[item.day]) {
                    if (sorts[item.day][key].condition === item.condition) {
                        can_add = false;
                    }
                }

                if (can_add) {
                    sorts[item.day].push(condition);
                }
            } else {
                sorts[item.day] = [condition];
            }
        }
        setCondition(sorts);
    }, [forecast]);

    const toggle = (show, setshow) => {
        setshow(!show);
    };

    //========================================

    useEffect(() => {
        getProducts(GET_PRODUCTS_URL);
        getMeteoConfig();
    }, []);
    //========================================
    const getProducts = async (url) => {
        try {
            const data = await backendAxios.get(url, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(data?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };
    //========================================
    const postData = async (data, url) => {
        try {
            const response = await backendAxios.post(
                url,
                JSON.stringify(data),
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log(response);
            if (response?.data?.success) {
                notyf.success(
                    "Enregistrement réussi ! L'alerte a été sauvegardée avec succès !"
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
    //========================================
    const getMeteoConfig = async () => {
        try {
            const response = await backendAxios.get(GET_CONFIGS_URL, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(response?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.set("typeAlert", "meteologique");
        const formDataObject = Object.fromEntries(formData.entries());

        // Check if any field is empty in the form data
        const isEmpty = Object.values(formDataObject).some((value) => !value == "");

        if (formDataObject && !isEmpty) {
            setData({
                ...data,
                ...formDataObject,
                idUser,
                idOrganisation,
            });
            const updatedFormObject = {
                ...formDataObject,
                ...data,
                idUser,
                idOrganisation,
            };

            // console.log(
            //     "2 : ",
            //     JSON.stringify(updatedFormObject)
            // );
            console.log(updatedFormObject);

            postData(data, POST_CONFIGS_URL);
        } else {
            notyf.error("Veuillez remplir tous les champs !");
        }
    };

    return (
        <>
            <div className="h-18 fixed  top-0 bg-custom-white w-full shadow-md">
                <TopHeader />
                <BackNavStep
                    classes="hidden"
                    title="configuration Méteo"
                    linkTo="/alert"
                />
            </div>
            {/* add content */}
            {Open && <ModalContenu isOpen={Open} setIsOpen={setOpen} />}
            {isOpen && (
                <ModalCondition
                    condition={condition}
                    setIsOpen={setIsOpen}
                    setData={setData}
                />
            )}

            <main className=" pt-44 md:pt-0 h-screen md:max-w-screen-md mx-auto  flex justify-center px-4 items-center  ">
                <div className="md:max-w-screen-xl  text-text-gray mt-52 w-full">
                    <CardMeteo />
                    <form onSubmit={handleSubmit} className="space-y-5 py-5">
                        <div className="flex justify-end my-4 gap-2">
                            <DynamicButton
                                type="button"
                                label={<TbAirConditioning />}
                                onClick={() => toggle(isOpen, setIsOpen)}
                            />
                            <DynamicButton
                                label={<MdOutlineProductionQuantityLimits />}
                                type="button"
                                onClick={() => toggle(Open, setOpen)}
                            />
                        </div>
                        <div>
                            <DynamicSelect
                                label="A qui envoyer?"
                                placeholder="Sélectionner à qui envoyer"
                                options={["Groupe 1", "Groupe 2", "Groupe 3"]}
                                nameData="audience"
                            />
                        </div>
                        <div className="flex gap-2">
                            <DynamicSelect
                                label="Cycle"
                                placeholder="Sélectionner un cycle"
                                options={[
                                    "semence",
                                    "croissance",
                                    "recolte",
                                    "conditionnement",
                                ]}
                                nameData="cycle"
                            />
                        </div>

                        <div className="flex gap-2 w-full">
                            <DynamicSelect
                                label="Quand envoyer"
                                placeholder="Sélectionner un jour"
                                options={Object.keys(condition)}
                                nameData="sendDay"
                            />
                        </div>
                        <div className="flex gap-2">
                            <DynamicSelect
                                label="Canal d'envoie"
                                placeholder="Sélectionner par quoi alerter"
                                options={["whatsapp", "sms", "notification"]}
                                nameData="canal"
                            />
                        </div>
                        <div>
                            <DynamicTextarea
                                label="Message"
                                rows={3}
                                name="message"
                            />
                        </div>

                        <div className="">
                            <DynamicButton
                                label="Enregistrer"
                                getsizeClasses="w-full"
                            />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
