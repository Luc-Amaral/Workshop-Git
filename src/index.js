import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>1º Fase Concluída</h1>
    
      <Confetti/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
