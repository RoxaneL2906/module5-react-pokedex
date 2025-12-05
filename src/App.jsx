import "./App.css";

import { useState } from "react";

import { PokemonList } from "./components/PokemonList";
import { SearchBar } from "./components/SearchBar";
import { PokemonDetail } from "./components/PokemonDetail";

function App({ pokemons }) {
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);

  let selectedPokemonEvolutions = null;
  if (selectedPokemon?.apiEvolutions.length > 0) {
    const evolutionsIds = selectedPokemon?.apiEvolutions
      .map((e) => e.pokedexId)
      .filter((id) => id < 151);
    selectedPokemonEvolutions = pokemons.filter((p) =>
      evolutionsIds.includes(p.id)
    );
  }

  function onPokemonFound(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="app">
      <PokemonList pokemons={pokemons} onClickPokemon={setSelectedPokemon} />
      <div className="right">
        <SearchBar onPokemonFound={onPokemonFound} />
        <PokemonDetail
          pokemon={selectedPokemon}
          evolutions={selectedPokemonEvolutions}
          onClickPokemon={setSelectedPokemon}
        />
      </div>
    </div>
  );
}

export default App;
