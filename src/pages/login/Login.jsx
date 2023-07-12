import React, { useState, useRef, useEffect, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";
import io from "socket.io-client";
import { backendAxios } from "../../api/axios";
import { SocketContext } from "../../context/SocketContext";
const LOGIN_URL = "/login";
const Login = () => {
  //for auth
  const { auth, setAuth } = useAuth();
  const { setSocket } = useContext(SocketContext);
  useEffect(() => {
    const socket = io("http://localhost:3500");
    socket.on("connect", () => {
      console.log("Connected to the socket.io server");
      setSocket(socket);
    });
    //     // socket.on("disconnect", () => {
    //     //     console.log("Disconnected from the sockext.io server");
    //     // });
    // return () => {
    //     socket.disconnect();
    // };
  }, []);
  const [btnValue, setBtnValue] = useState("Se connecter");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMessage("");
  }, [email, password]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setBtnValue("chargement...");
      setIsSubmitting(true);
      try {
        /**
         * headers : spécifie l'en-tête Content-Type comme application/json,
         * indiquant que le corps de la requête est au format JSON.
         * withCredentials : est défini sur true pour indiquer qu'il faut
         *inclure les cookies lors de l'envoi de la requête
         *(utile pour maintenir la session d'authentification).
         */
        const response = await backendAxios.post(
          LOGIN_URL,
          JSON.stringify({ email, password }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        // console.log(JSON.stringify(response?.data));
        const id = response?.data?.data?.id;
        const token = response?.data?.data?.token;
        const role = response?.data?.data?.role;
        const first_name = response?.data?.data?.first_name;
        const phone = response?.data?.data?.phone;
        const last_name = response?.data?.data?.last_name;
        //Stockage des donnees de l'utilisateur dans le contexte
        setAuth({
          id,
          first_name,
          last_name,
          email,
          password,
          token,
          role,
          phone,
        });
        setEmail("");
        setPassword("");
        //Redirection
        if (role === 3) {
          navigate("/agriculteur/contenu", { replace: true });
        } else if (role === 1 || role === 2) {
          navigate("/dashboard", { replace: true });
        }
      } catch (error) {
        if (!error.response) {
          setErrMessage("Erreur");
        }
        console.log(error.response?.data);
        setErrMessage(error.response?.data.message);
        errRef.current.focus();
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] p-5">
        <h1 className="text-xl text-center font-bold">Connexion</h1>
        <div
          ref={errRef}
          className={
            errMessage
              ? "flex justify-between p-4 mb-4 text-sm text-[#B91C1C] border border-[#FCA5A5] rounded-lg bg-[#FEF2F2]"
              : "hidden"
          }
          role="alert"
          aria-live="assertive"
        >
          <div>{errMessage}</div>
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full mb-3 md:mb-5">
            <div className="relative">
              <label
                htmlFor="password"
                className="text-gray-600 text-md mb-[150px] text-text-gray"
              >
                Mot de passe
              </label>
              <input
                placeholder=".........."
                type={showPassword ? "text" : "password"}
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
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="remenber"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
              <label htmlFor="remenber" className="text-text-gray ml-2 ">
                Se souvenir de moi
              </label>
            </div>
            <div>
              <Link to="/renitialiser" className="text-text-gray underline">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
          <div className="w-full mb-3md:mb-5">
            <Button
              value={btnValue}
              typ="submit"
              className="block mx-auto shadow bg-deep-green hover:bg-over-green text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
              disabled={isSubmitting}
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
