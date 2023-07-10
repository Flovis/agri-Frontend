import DynamicInput from "../../../PublicComponent/DynamicInput";
import DynamicSelect from "../../../PublicComponent/DynamicSelect ";
import DynamicButton from "../../../PublicComponent/DynamicButton ";
import DynamicTitle from "../../../PublicComponent/DynamicTitle";
import TopHeader from "../../../header/TopHeader";
import BackNavStep from "../../../header/BackNav";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import DynamicTextarea from "../../../PublicComponent/DynamicTextarea ";

const Horaire = ({ onNext, onPrevious }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const defaultType = searchParams.get("type");
    const navigate = new useNavigate();

    const handlePrevious = () => {
        onPrevious("");
    };

    const handleNext = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        formdata.set("category", defaultType);
        const data = Object.fromEntries(formdata);
        if (data) {
            notyf.success("Une nouvelle alert a été configurer");
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
                    handlePrevious={handlePrevious}
                />
            </div>
            <form
                onSubmit={handleNext}
                className="flex flex-col justify-center items-center gap-4 mt-32"
            >
                <div className="w-[90%] flex flex-col gap-px">
                    <div className="w-[90%]">
                        <DynamicTitle
                            text="Informations complémentaires"
                            size="xl"
                        />
                    </div>
                    <div className="mt-4">
                        <DynamicTextarea
                            label="Description du contenu"
                            rows={3}
                            name="description"
                        />
                    </div>

                    <div className="-my-2">
                        <DynamicInput
                            type="number"
                            name="frequence"
                            label="Frequence d'envoi"
                        />
                    </div>
                    <div className="-my-2">
                        <DynamicSelect
                            label="Canal d'envoi"
                            options={["Whathsapp", "Sms", "Notification"]}
                            name="canal"
                            nameData="canal"
                        />
                    </div>
                    {/* <div className="my-2">
            <DynamicSelect
              label="Audiance"
              options={["Whathsapp", "Sms", "Notification"]}
              name="group"
              nameData="group"
            />
          </div> */}

                    <div className="mt-8">
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

export default Horaire;
