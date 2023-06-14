import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { validationSchema } from "../../validation/validationSchemas";
import { Formik, Form } from "formik";

const ResetPassword = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[500px] p-5">
                    <h1 className="text-xl text-center font-bold">
                        Réinitialiser votre mot de passe
                    </h1>
                    <div className="text-text-gray text-md text-center mt-3 mb-3">
                        Veuillez renseigner votre adresse e-mail ci-dessus. Un
                        lien de réinitialisation vous sera envoyé pour
                        réinitialiser votre mot de passe
                    </div>

                    {/*Confirguration | recuperation avec Formik */}
                    <Formik
                        initialValues={{ email: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.setSubmitting(false);
                        }}
                    >
                        {/*Formulaire de renitialisation*/}
                        <Form>
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
                                <Button
                                    value="M'envoyer un mail"
                                    typ="submit"
                                    className="block mx-auto shadow bg-[#08C18A] hover:bg-[#06B581] text-custom-white font-bold py-3 px-10 rounded-lg w-full h-[55px] md:text-[17px]"
                                />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
