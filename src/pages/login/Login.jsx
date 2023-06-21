import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { validationSchema } from "../../validation/validationSchemas";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] p-5">
                <h1 className="text-xl text-center font-bold">Connexion</h1>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        actions.setSubmitting(false);
                    }}
                >
                    <Form>
                        <div className="w-full mb-3 md:mb-5">
                            <Input
                                label="Email"
                                placeholder="Votre email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="w-full mb-3 md:mb-5">
                            <Input
                                label="Mot de passe"
                                placeholder=".........."
                                type="password"
                                name="password"
                                required
                            />
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
                                className="block mx-auto shadow bg-deep-green hover:bg-[#06B581] text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                            />
                            <div className="mt-5 text-center text-text-gray">
                                Vous n'avez pas de compte?{" "}
                                <Link to="/enregister" className="underline">
                                    Creer un compte
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;
