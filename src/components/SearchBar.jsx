import "./SearchBar.css";

export function SearchBar({ onPokemonFound }) {
  function onSearchPokemon(event) {
    const name = event.target.value;

    if (name.length < 1) {
      return;
    }

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Pokémon non trouvé ou erreur API");
      })
      .then((pokemon) => {
        if (pokemon?.pokedexId) {
          onPokemonFound(pokemon);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <input type="text" onChange={onSearchPokemon} className="search_bar" />
  );
}
