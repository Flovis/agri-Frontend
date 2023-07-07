import React, {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useContext,
} from "react";
import BackNav from "./BackNav";
import Button from "../../components/Button";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import data from "./data.json";
import { RiNotification2Line } from "react-icons/ri";
import { BsCalendarWeek } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import NavBottom from "./NavBottom";
import { backendAxios } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client"

// import { SocketContext } from "../../context/SocketContext";
// const socket = io("http://localhost:3500");


const PRODUCTION_URL = "/production";

const AddPlanProduction = () => {
    // const socket = useContext(SocketContext);
    // console.log("kadea", socket);
    useEffect(() => {
        // socket.on("connect", () => {
        //     console.log("connected");
        // });
        // socket.on("Test", (msg) => {
        //     console.log(`hwshwsjwsj`);
        // });
    }, []);

    const allData = Object.keys(data);
    // console.log(allData);

    const { auth } = useAuth();
    const [btnValue, setBtnValue] = useState("Ajouter");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [products, setProducts] = useState();
    const [selectedProduct, setSelectedProduct] = useState();

    const [startDate, setStartDate] = useState("");
    const [productionDates, setProductionDates] = useState();

    const onSelect = useCallback((selectedProduct) => {
        setSelectedProduct(selectedProduct);
        setProducts(data[selectedProduct.value]);
    }, []);

    const itemsProduct = useMemo(() =>
        allData.map((data) => ({ id: data, value: data }))
    );

    //

    const calculeDate = (dateDebut, jours) => {
        const dates = [dateDebut];
        const date = new Date(dateDebut);
        jours.forEach((jour) => {
            date.setDate(date.getDate() + jour);
            const dateSuivante = date.toISOString().split("T")[0];
            dates.push(dateSuivante);
        });

        return dates;
    };

    //
    useEffect(() => {
        if (selectedProduct) {
            setProductionDates(
                calculeDate(startDate, [
                    products.croissance.min,
                    products.recolte.min,
                    products.conditionnement.min,
                ])
            );
        }
    }, [startDate]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedProduct && startDate) {
            // console.log(selectedProduct.value);
            // console.log(productionDates);
            // console.log(typeof productionDates[0]);
            setBtnValue("chargement...");
            setIsSubmitting(true);

            try {
                const response = await backendAxios.post(
                    PRODUCTION_URL,
                    JSON.stringify({
                        userId: auth.id,
                        userRole: auth.role,
                        productName: selectedProduct.value,
                        semenceDate: productionDates[0],
                        croissanceDate: productionDates[1],
                        recolteDate: productionDates[2],
                        conditionDate: productionDates[3],
                    }),
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );

                setBtnValue("Ajouter");
                setIsSubmitting(false);

                toast.success("Le produit a été ajouté avec succès.");
                console.log(response?.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("les cha,ps sont requis");
        }
    };

    return (
        <div>
            <BackNav
                linkTo="/agriculteur/plan-de-production"
                title="Ajouter un produit"
            />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <form onSubmit={handleSubmit}>
                <div className="w-full p-5">
                    <div className="w-full mb-1 md:mb-5 ">
                        <label htmlFor="produit" className="text-md mb-[150px]">
                            Nom du produit
                        </label>
                        <DatalistInput
                            id="produit"
                            className="produit"
                            labelProps={{ className: "" }}
                            listboxOptionProps={{
                                className: "",
                            }}
                            label=""
                            placeholder="Tomates"
                            onSelect={onSelect}
                            items={itemsProduct}
                            inputProps={{
                                className:
                                    "bg-white w-full text-text-gray border border-borde-gray  rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full h-[50px]",
                                name: "productName",
                                style: {
                                    fontSize: "16px",
                                },
                            }}
                            listboxProps={{
                                className:
                                    " h-60 overflow-y-auto text-text-gray",
                            }}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 ">
                        <label
                            htmlFor="date_debut"
                            className="text-gray-600 text-md mb-[150px]"
                        >
                            Date de debut
                        </label>
                        <input
                            type="date"
                            name="date_debut"
                            id=""
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                            required
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-1 md:mb-5 mt-4">
                        {/* {product && startDate && (
                            <>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Semence:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.semence.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Croissance:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.croissance.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Récolte:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.recolte.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className="font-bold">
                                            Conditionnement:{" "}
                                        </span>
                                        <span className="font-bold">
                                            {product.conditionnement.min}
                                        </span>{" "}
                                        jours maximun
                                    </div>
                                </div>
                            </>
                        )} */}
                    </div>
                    <div className="w-full mt-3 md:mb-5">
                        <Button
                            value={btnValue}
                            type="submit"
                            className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
            </form>

            <div className="w-full p-5"></div>
            {/* <NavBottom /> */}
            <NavBottom
                data={[
                    {
                        to: "/agriculteur/contenu",
                        icon: <RxHome className="text-2xl" />,
                        nom: "Accuiel",
                    },
                    {
                        to: "/agriculteur/notifications",
                        icon: <RiNotification2Line className="text-2xl" />,
                        nom: "Notifications",
                    },
                    {
                        to: "/agriculteur/plan-de-production",
                        icon: <BsCalendarWeek className="text-2xl" />,
                        nom: "Production",
                    },
                    {
                        to: "/agriculteur/profile",
                        icon: <CgProfile className="text-2xl" />,
                        nom: "Profile",
                    },
                ]}
            />
        </div>
    );
};

export default AddPlanProduction;
