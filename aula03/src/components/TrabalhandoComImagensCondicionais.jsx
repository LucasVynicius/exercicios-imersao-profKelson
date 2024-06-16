import React from "react";
import Goku from "../assets/Goku.webp";

const TrabalhandoComImagensCondicionais = ({ tipoImagem }) => {
  const imagensCondicionais = () => {
    if (tipoImagem === "PUBLIC") {
      return <img src="/gohan.jpg" alt="" />;
    } else if (tipoImagem === "ASSETS") {
      return <img src={Goku} alt="" />;
    }
  };
  return;
  <div></div>;
};

export default TrabalhandoComImagensCondicionais;
