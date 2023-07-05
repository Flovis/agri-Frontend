import DynamicInput from "../../../PublicComponent/DynamicInput";
import DynamicSelect from "../../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import DynamicTextarea from "../../../PublicComponent/DynamicTextarea ";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import DynamicDataSet from "../../../PublicComponent/DynamicDataSet";

const ContenuSelect = ({ onNext }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultType = searchParams.get("type");
  const navigate = new useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("category", defaultType);
    const data = Object.fromEntries(formdata);
    onNext(data);
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
              label="Sélectionner le cycle de production"
              options={["semence", "croissance", "recolte", "conditionnement"]}
              name="cycle"
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
          <div>
            <DynamicTextarea
              label="Description du contenu"
              rows={3}
              name="description"
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
