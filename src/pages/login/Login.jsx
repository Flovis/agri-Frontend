import React, { useState, useRef, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
 
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    };

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [success, setuccess] = useState(false);
    

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMessage("");
    }, [user, password]);

    const handleSubmit = async (e) => {
        console.log(user, password);
        setUser("");
        setPassword("");
        setuccess(true);
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] p-5">
                <h1 className="text-xl text-center font-bold">Connexion</h1>
                <div
                    ref={errRef}
                    className={
                        errMessage
                            ? "flex p-4 mb-4 text-sm text-[#b91c1c] border border-[#fca5a5] rounded-lg bg-[#fef2f2]"
                            : "hidden"
                    }
                    role="alert"
                    aria-live="assertive"
                >
                    <div>few things up and try submitting again.</div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="w-full mb-3 md:mb-5">
                        <label
                            htmlFor="email"
                            className="text-gray-600 text-md mb-[150px] text-text-gray"
                        >
                            Adresse mail
                        </label>
                        <input
                            placeholder="votre email"
                            type="email"
                            name="email"
                            id="email"
                            required
                            ref={userRef}
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                        />
                    </div>

                    <div className="w-full mb-3 md:mb-5">
                        <label
                            htmlFor="password"
                            className="text-gray-600 text-md mb-[150px] text-text-gray"
                        >
                            Mot de passe
                        </label>
                        <input
                            placeholder=".........."
                            type="password"
                            name="password"
                            id="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="border border-borde-gray text-text-gray text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                        />
                        <button
                            type="button"
                            className="absolute flex  top-1/2 insert-y-o right-3 text-text-gray focus:outline-none"
                            onClick={visiblePassword}
                        >
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                            />
                        </button>
                    </div>

                    <div className="flex justify-between mb-4">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                id="remenber"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                            <label
                                htmlFor="remenber"
                                className="text-text-gray ml-2 "
                            >
                                Se souvenir de moi
                            </label>
                        </div>
                        <div>
                            <Link
                                to="/renitialiser"
                                className="text-text-gray underline"
                            >
                                Mot de passe oublié ?
                            </Link>
                        </div>
                    </div>
                    <div className="w-full mb-3md:mb-5">
                        <Button
                            value="Se connecter"
                            typ="submit"
                            className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                        />
                        <div className="mt-5 text-center text-text-gray">
                            Vous n'avez pas de compte?{" "}
                            <Link to="/enregister" className="underline">
                                Creer un compte
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
