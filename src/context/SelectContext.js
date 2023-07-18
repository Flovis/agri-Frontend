import React, { createContext, useState } from "react";

const OurContext = createContext();

const ContextGeneral = (props) => {
  const [groupe, setGroupe] = useState();

  return (
    <OurContext.Provider value={{ groupe, setGroupe }}>
      {props.children}
    </OurContext.Provider>
  );
};

export { OurContext, ContextGeneral };
