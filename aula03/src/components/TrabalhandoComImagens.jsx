import React from "react";
import Goku from "../assets/Goku.webp";
import Lucas from "../assets/Lucas.jpg";

const TrabalhandoComImagens = () => {
  return (
    <div className="imagens">
      <div className="imagem">
        <h2>Trabalhando com imagem pasta Public</h2>
        <img src="/gohan.jpg" alt="" />
      </div>
      <div className="imagem">
        <h2>Trabalhando com imagem pasta Assets</h2>
        <img src={Goku} alt="" />
      </div>
    </div>
  );
};

export default TrabalhandoComImagens;
