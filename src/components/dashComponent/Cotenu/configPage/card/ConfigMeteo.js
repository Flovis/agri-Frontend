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

export default function ConfigMeteo() {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [condition, setCondition] = useState({});

  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const notyf = new Notyf({
      duration: 1000,
      position: {
        x: "right",
        y: "top",
      },
    });
    const formData = new FormData(e.target);
    formData.set("typeAlert", "meteologique");
    const formDataObject = Object.fromEntries(formData.entries());

    // Check if any field is empty in the form data
    const isEmpty = Object.values(formDataObject).some((value) => !value);

    if (
      formDataObject &&
      formDataObject.audience !== "Choisi à qui envoyer" &&
      formDataObject.cycle !== "selectionne le cycle" &&
      !isEmpty
    ) {
      setData({
        ...data,
        ...formDataObject,
      });
      console.log("Données du formulaire en JSON : ", JSON.stringify(data));
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

      <main className=" pt-44 md:pt-0 h-screen   flex items-center justify-center px-4 items-center  ">
        <div className="md:max-w-screen-xl  text-text-gray mt-52 w-full">
          <CardMeteo />
          <form onSubmit={handleSubmit} className="space-y-5">
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
                options={[
                  "Choisi à qui envoyer ",
                  "group",
                  "Option 2",
                  "Option 3",
                ]}
                nameData="audience"
              />
            </div>
            <div className="flex gap-2">
              <DynamicSelect
                label="Cycle"
                options={[
                  "selectionne le cycle",
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
                options={Object.keys(condition)}
                nameData="selectedDay"
              />
            </div>
            <div className="flex gap-2">
              <DynamicSelect
                label="Canal"
                options={[
                  "selectionne le canal d'envoi",
                  "whatsapp",
                  "sms",
                  "notification",
                ]}
                nameData="canal"
              />
            </div>
            <div>
              <DynamicTextarea label="Message" rows={3} name="message" />
            </div>

            <div className="">
              <DynamicButton label="Enregistrer" getsizeClasses="w-full" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
