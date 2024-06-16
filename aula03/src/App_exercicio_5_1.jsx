import React from "react";
import TrabalhandoComImagensCondicionais from "./components/TrabalhandoComImagensCondicionais";

const App = () => {
  return (
    <div>
      <TrabalhandoComImagensCondicionais tipoImagem={"PUBLIC"} />
      <TrabalhandoComImagensCondicionais tipoImagem={"ASSETS"} />
    </div>
  );
};

export default App;
