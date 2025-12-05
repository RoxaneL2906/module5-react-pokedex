import "./Pokemon.css";

export function Pokemon({ pokemon, onClickPokemon }) {
  return (
    <div
      className="pokemon"
      onClick={() => {
        onClickPokemon(pokemon);
      }}
    >
      <div className="pokemon_infos">
        <p className="pokemon_id">{pokemon.id}</p>
        <p className="pokemon_name">{pokemon.name}</p>
      </div>
      <img className="pokemon_image" src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}
