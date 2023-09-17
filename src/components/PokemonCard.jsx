import { Link } from "react-router-dom";

export const PokemonCard = ({index,  pokemon }) => {
  return (
    <div className="card shadow ms-3 mb-3 p-2" style={{height: "200px", width: "410px"}}>
      <div className="d-flex">
        <div style={{width: "170px", maxHeight: "180px"}}>
          <img
            src={pokemon.sprite}
            alt={pokemon.species}
            className=" rounded-left w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="ms-2" style={{width: "240px"}}>
          <h5 className=" text-truncate">{pokemon.species}</h5>
          <p className="card-text m-0 text-truncate">
            <strong>Color:</strong> {pokemon.color}
          </p>
          <p className="card-text m-0 text-truncate">
            <strong>Base Stats Total:</strong> {pokemon.baseStatsTotal}
          </p>
          <p className="card-text m-0 text-truncate">
            <strong>Weight:</strong> {pokemon.weight}
          </p>
          <p className="card-text m-0 text-truncate">
            <strong>Height:</strong> {pokemon.height}
          </p>
          <Link to={`/pokemon/${index}`} className="btn btn-primary mt-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};