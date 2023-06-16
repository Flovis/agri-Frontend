import axios from "axios";
import React from "react";

export default function Meteodata() {
  async function getMeteo() {
    const response = await axios.get("");
  }
  return <div>Meteodata</div>;
}
