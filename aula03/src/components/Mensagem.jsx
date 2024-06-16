import React from "react";

const Mensagem = ({ tipo }) => {
  const mensagens = () => {
    if (tipo === "Sucesso") {
      return <h1>Operação realizada com sucesso!</h1>;
    } else if (tipo === "Erro") {
      return <h2>Ocorreu um erro na operação!</h2>;
    } else if (tipo === "Aviso") {
      return <h3>Atenção! Verifique os dados!</h3>;
    } else {
      return null;
    }
  };
  return <div className="mensagem">{mensagens()}</div>;
};

export default Mensagem;
