import React, { useState } from "react";
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
import DynamicCheckbox from "../../../PublicComponent/DynamicCheckbox";
import ModalCondition from "../../../Modal/ModalCondition";

export default function ConfigMeteo() {
    const [isOpen, setIsOpen] = useState(false);
    const [Open, setOpen] = useState(false);
    const [dataModal, setData] = useState({});
    console.log("dataModal: ", dataModal);
    const [condition, setCondition] = useState({});
    console.log("condition: ", condition);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/contenu/listemeteo");
    };

    const toggle = (show, setshow) => {
        setshow(!show);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set("condition", dataModal.condition);
        formData.set("jour", dataModal.date.split("-")[2] * 1);
        const newData = {};
        for (let pair of formData.entries()) {
            newData[pair[0]] = pair[1];
        }
        setCondition(newData);
    };

    return (
        <>
            <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
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
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setData={setData}
                />
            )}

            <main className="mb-10 mt-28 w-full h-full flex flex-col items-center justify-center px-4 items-center">
                <div className="max-w-sm w-full text-text-gray">
                    <div className="-mb-3 mt-6"></div>
                    <CardMeteo />
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                                label="Audiance"
                                options={["group", "Option 2", "Option 3"]}
                                nameData="audience"
                            />
                        </div>
                        <div className="flex gap-2">
                            <DynamicCheckbox
                                name="semence"
                                type="checkbox"
                                label="semence"
                            />
                            <DynamicCheckbox
                                name="croissance"
                                type="checkbox"
                                label="croissance"
                                value="croissance"
                            />
                            <DynamicCheckbox
                                name="recolte"
                                type="checkbox"
                                label="recolte"
                            />
                            <DynamicCheckbox
                                name="conditionnement"
                                type="checkbox"
                                label="conditionnement"
                            />
                        </div>
                        <div>
                            <DynamicTextarea
                                label="Message"
                                rows={3}
                                name="message"
                            />
                        </div>

                        <div>
                            <DynamicButton
                                label="Enregistrer"
                                getsizeClasses="w-full "
                                // type="submit"
                            />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
