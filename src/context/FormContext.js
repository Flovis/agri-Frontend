import React, { createContext, useState } from "react";

const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [form, setForm] = useState({
//     title: "",
//     language: "",
//     file: "",
//     plan: "",
//     productName: "",
//     tag: "",
//   });

//   //   console.log("form: ", form);
//   return (
//     <FormContext.Provider value={{ form, setForm }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

export default FormContext;
