import React from "react";
import ListaDeLivros from "./components/ListaDeLivros";
import "./App.css";

const App = () => {
  const livros = [
    { titulo: "Uma vida com próposito", autor: "Rick Warren", ano: 2002 },
    {
      titulo: "Em Seus Passos Que Faria Jesus?",
      autor: "Charles M. Sheldon",
      ano: 1896,
    },
    { titulo: "A Cabana", autor: "William P. Young", ano: 2007 },
    { titulo: "O Peregrino", autor: "John Bunyan", ano: 1678 },
  ];
  return (
    <div className="container">
      <h1>Lista de livros:</h1>
      {<ListaDeLivros livro={livros} />}
    </div>
  );
};

export default App;
