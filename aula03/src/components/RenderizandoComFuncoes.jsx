import React from "react";

const RenderizandoComFuncoes = () => {
  const escolhaDeRenderizacao = (oQueRenderizar) => {
    if (oQueRenderizar == "Pb") {
      return <h1>Paraíba</h1>;
    } else {
      return <h2>João Pessoa</h2>;
    }
  };
  return (
    <div className="container">
      <div className="renderizacao">
        {escolhaDeRenderizacao("Pb")}
        {escolhaDeRenderizacao("João Pessoa")}
      </div>
    </div>
  );
};

export default RenderizandoComFuncoes;
const escolhaDeRenderizacao = () => {};
