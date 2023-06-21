import React, { useEffect, useState } from "react";
import languages from "../../data/languages";

export default function FetchDataLanguage() {
  const [language, setLanguage] = useState();

  useEffect(() => {
    fetch("../../data/languages.json")
      .then((res) => setLanguage())
      .then((data) => setLanguage(data));
  }, []);
  return <div>{JSON.stringify(languages)}</div>;
}
