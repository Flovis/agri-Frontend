import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { validationSchema } from "../../validation/validationSchemas";
import PhoneInputField from "../../components/PhoneInputField";
const Singin = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[500px] p-5">
                <h1 className="text-xl text-center font-bold">
                    Creer votre compte
                </h1>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        name: "",
                        phone: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        actions.setSubmitting(false);
                    }}
                >
                    <Form>
                        <div className="w-full mb-3 md:mb-5 ">
                            <Input
                                label="Nom"
                                placeholder="Flovis"
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                        <div className="w-full mb-3 md:mb-5">
                            <Input
                                label="Email"
                                placeholder="Votre email"
                                type="email"
                                required
                                name="email"
                            />
                        </div>
                        <div className="w-full mb-3 md:mb-5">
                            <PhoneInputField
                                label="Téléphone"
                                placeholder="+24382000000"
                                name="phone"
                                className="text-md text-text-gray border border-borde-gray block w-full rounded-lg"
                                required
                            />
                        </div>
                        <div className="w-full mb-3 md:mb-5">
                            <Input
                                label="Mot de passe"
                                placeholder="......"
                                type="password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="w-full mb-3 md:mb-5">
                            <Input
                                label="confimer le mot de passe"
                                placeholder="......"
                                type="password"
                                name="confrim-password"
                                required
                            />
                        </div>
                        <div className="w-full mb-3md:mb-5">
                            <Button
                                value="S'eregister"
                                typ="submit"
                                className="block mx-auto shadow bg-deep-green hover:bg-[#06B581] text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                            />
                            <div className="mt-5 text-center text-text-gray">
                                Avez-vous déjà un compte?{" "}
                                <Link to="/" className="underline">
                                    Vous connecter
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Singin;
