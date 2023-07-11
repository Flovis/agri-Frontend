export default function CardNotification() {
    const handleClick = () => {};
    return (
        <div className="z-50 flex justify-center h-screen items-center mt-2  -mr-56  ">
            <div className="relative my-32 ">
                <div
                    className="absolute border border-borde-gray right-0 mt-2 bg-custom-white rounded-md shadow-lg overflow-hidden z-20 w-72"
                    //   style={{ width: "20rem" }}
                >
                    <div className="py-2 overflow-y-auto h-36 ">
                        <button onClick>
                            <div className="flex items-center px-4 py-3 border-b border-borde-gray hover:bg-gray-100 -mx-2">
                                <p className="text-gray-600 text-sm mx-2">
                                    <span className="font-bold">
                                        cycle : semance
                                    </span>{" "}
                                    produit tomate
                                    <span className="font-bold text-blue-500">
                                        envoyer
                                    </span>{" "}
                                    avec success
                                </p>
                            </div>
                        </button>

                        <div className="flex items-center px-4 py-3 border-b border-borde-gray hover:bg-gray-100 -mx-2">
                            <p className="text-gray-600 text-sm mx-2">
                                <span className="font-bold">
                                    cycle : semance
                                </span>{" "}
                                produit tomate
                                <span className="font-bold text-blue-500">
                                    envoyer
                                </span>{" "}
                                avec success
                            </p>
                        </div>
                    </div>
                    <button className="w-full">
                        <div className="block text-center font-bold py-2">
                            Voir plus
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
