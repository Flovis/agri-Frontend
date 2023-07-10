import DynamicSelect from "../../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import DynamicDataSet from "../../../PublicComponent/DynamicDataSet";
import { useState } from "react";

const ContenuSelect = ({ onNext }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultType = searchParams.get("type");
  const navigate = new useNavigate();
  const [data, setdata] = useState({});
  console.log("data: ", data);

  const handleNext = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    if (data) {
      notyf.success("Remplissez des informations supplémentaires");
      onNext(data);
    } else {
      notyf.error("Veuillez remplir le formulaire");
    }
  };

  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  // notyf.error("Veuillez remplir le formulaire");
  // notyf.success("Remplis des informations supplémentaires");

  return (
    <>
      <div className="h-18 fixed top-0 bg-custom-white w-full shadow-md">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title="configuration"
          type={defaultType}
          linkTo={`/alert`}
        />
      </div>
      <form
        onSubmit={handleNext}
        className="flex flex-col justify-center items-center gap-4 mt-32"
      >
        <div className="w-[90%] flex flex-col gap-px">
          <div className="w-[90%]">
            <DynamicTitle text="Configuration" size="xl" />
          </div>
          <div className="my-2">
            <DynamicSelect
              label="Type d'alert"
              options={[
                "Alert meteologique",
                "Alert plan de production",
                "Autre",
              ]}
              nameData="typeAlert"
            />
          </div>

          {/* <div className="my-2"> */}

          <div className="my-2">
            <DynamicSelect
              label="Sélectionner le cycle de production"
              options={["semence", "croissance", "recolte", "conditionnement"]}
              nameData="cycle"
            />
          </div>
          <div className="-mt-2"></div>
          <div>
            <DynamicDataSet
              label="Sélectionner le produit"
              // onChange={(e) => setproductName(e.target.value)}
            />
          </div>
          <div className="my-2">
            <DynamicSelect
              label="Type de contenu"
              options={["audio", "video", "texte"]}
              name="category"
              nameData="category"
            />
          </div>

          <div className="mt-4">
            <DynamicButton
              label="Suivant"
              getsizeClasses="w-full mb-10"
              type="submit"
              // onClick={}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContenuSelect;
