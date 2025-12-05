import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
  .then((res) => res.json())
  .then((pokemons) => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <App pokemons={pokemons}/>
      </StrictMode>
    );
  });
