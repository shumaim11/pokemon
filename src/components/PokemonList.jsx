import { useQuery } from "@apollo/client";
import { PokemonCard } from "./PokemonCard";
import { useEffect } from "react";
import { usePokemonContext } from "../context/context/PokemonContext";
import { GET_ALL_POKEMONS } from "../apollo/apollo/queries";
import {Loading} from './Loading'
import loading_gif from '../assets/gifs/loading.gif'


export const PokemonList = () => {
  const { data, loading, error } = useQuery(GET_ALL_POKEMONS);
  const { setPokemons } = usePokemonContext();
  useEffect(() => {
    if(!loading && data){
      setPokemons(data.getAllPokemon);
      console.clear();
    }
  }, [data, loading, setPokemons]);

  if (loading) return <Loading loadingGif={loading_gif} fullScreen={true}/>;
  if (error) return <p>Error: {error.message}</p>;

  return(
    <div className="d-flex flex-wrap justify-content-center">
      {data && data.getAllPokemon.map((pokemon, index) => <PokemonCard key={index} index={index} pokemon={pokemon}/>)}
    </div>
  );
};