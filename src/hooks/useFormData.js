import React, { createContext, useState } from "react";

const ContentForm = createContext();

const ContentFormProvider = ({ children }) => {
  const [file, setFile] = useState({});
  const [content, setContent] = useState({});

  return (
    <ContentForm.Provider value={{ file, setFile, content, setContent }}>
      {children}
    </ContentForm.Provider>
  );
};

export { ContentForm, ContentFormProvider };
