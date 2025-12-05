import "./PokemonDetail.css";
import { Pokemon } from "./Pokemon";

export function PokemonDetail({ pokemon, evolutions, onClickPokemon }) {
  return (
    <div className="pokemon_details">
      <div className="pokemon_detail">
        <p className="pokemon_id">n°{pokemon.id}</p>
        <img className="pokemon_image" src={pokemon.image} alt={pokemon.name} />
        <p className="pokemon_name">{pokemon.name}</p>
        <div className="types">
          <p>Types</p>
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
      <div className="pokemon_evolutions">
        <p className="pokemon_evolutions_title">Evolutions</p>
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
    </div>
  );
}
