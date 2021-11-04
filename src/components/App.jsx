import React, { useState } from "react";
import html2canvas from "html2canvas";
import "../styles/app.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const changeLine1 = function (event) {
    setLinea1(event.target.value);
  };

  const changeLine2 = function (event) {
    setLinea2(event.target.value);
  };

  const changeImage = function (event) {
    setImagen(event.target.value);
  };

  const exportImage = function (event) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={changeImage}>
        <option value="mani">Mani</option>
        <option value="raptor">Filoso Raptor</option>
        <option value="stonks">Ganancias</option>
        <option value="willy-wonka">Willy Wonka</option>
        <option value="obama">Cool Obama</option>
      </select>
      <br />

      <input type="text" onChange={changeLine1} placeholder="primera linea" />
      <br />

      <input type="text" onChange={changeLine2} placeholder="segunda linea" />
      <br />

      <button onClick={exportImage}>Exportar</button>

      <div id="meme" className="meme">
        <span>{linea2}</span>
        <br />
        <span>{linea1}</span>
        <img
          src={
            imagen === "willy-wonka"
              ? "/images/" + imagen + ".png"
              : "/images/" + imagen + ".jpeg"
          }
          alt="meme-image"
        />
      </div>
    </div>
  );
}

export default App;
