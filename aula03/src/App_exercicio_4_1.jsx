import React from "react";
import "./App.css";
import Mensagem from "./components/Mensagem";

const App = () => {
  return (
    <div className="container">
      <h1>Renderização condicional simples:</h1>
      <Mensagem tipo="Sucesso" />
      <Mensagem tipo="Erro" />
      <Mensagem tipo="Aviso" />
    </div>
  );
};

export default App;
