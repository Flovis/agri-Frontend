import { useContext, useEffect, useState } from "react";
import DataMeteoContext from "../../../context/MeteoContext";
import React from "react";

const Stockage = [];

export default function Traitement() {
  const {
    dataMeteoContextValue: { contenu, setContenu },
  } = useContext(DataMeteoContext);

  useEffect(() => {
    Stockage.push(contenu);
    setContenu({});
  }, []);

  console.log("Stockage dans stockage: ", Stockage);
  return Stockage;
}
