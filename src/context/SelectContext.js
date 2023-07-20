import React, { createContext, useState } from "react";

const OurContext = createContext();

const ContextGeneral = (props) => {
  const [groupe, setGroupe] = useState();
  const [datas, setDatas] = useState([]);

  return (
    <OurContext.Provider value={{ groupe, setGroupe, datas, setDatas }}>
      {props.children}
    </OurContext.Provider>
  );
};

export { OurContext, ContextGeneral };
