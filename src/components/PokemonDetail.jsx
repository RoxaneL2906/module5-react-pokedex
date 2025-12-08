import "./PokemonDetail.css";
import { Pokemon } from "./Pokemon";

export function PokemonDetail({ pokemon, evolutions, onClickPokemon }) {
  function Evolutions() {
    console.log(evolutions)
    if (evolutions?.length > 0) {
      return (
        <div className="pokemon_evolutions">
          <p className="pokemon_evolutions_title">
            {evolutions?.length > 1 ? "Evolutions" : "Evolution"}
          </p>
          <div className="pokemon_evolutions_list">
            {evolutions?.map((evolution) => (
              <Pokemon
                pokemon={evolution}
                key={evolution.id}
                onClickPokemon={(evolution) => onClickPokemon(evolution)}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="pokemon_details">
      <div className="pokemon_detail">
        <p className="pokemon_id">n°{pokemon.id}</p>
        <img className="pokemon_image" src={pokemon.image} alt={pokemon.name} />
        <h2 className="pokemon_name">{pokemon.name}</h2>
        <div className="types">
          <p>{pokemon.apiTypes.length > 1 ? "Types" : "Type"}</p>
          <div className="types_images">
            {pokemon.apiTypes.map((type) => (
              <img
                className="type_image"
                src={type.image}
                alt={type.name}
                key={type.name}
              />
            ))}
          </div>
        </div>
      </div>
      <Evolutions />
    </div>
  );
}
