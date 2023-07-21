import React, { createContext, useState } from "react";

const OurContext = createContext();

const ContextGeneral = (props) => {
  const [groupe, setGroupe] = useState({});
  const [datas, setDatas] = useState([]);
  const [myItem, setMyItem] = useState(null);

  return (
    <OurContext.Provider
      value={{ groupe, setGroupe, datas, setDatas, myItem, setMyItem }}
    >
      {props.children}
    </OurContext.Provider>
  );
};

export { OurContext, ContextGeneral };
