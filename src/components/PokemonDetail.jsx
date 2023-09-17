import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePokemonContext } from '../context/context/PokemonContext';
import {Error} from './Error';

export const PokemonDetail = () => {
  const { id } = useParams();
  const { pokemons } = usePokemonContext();
  const pokemon = pokemons[id];
  return (
    <>
    {pokemon ?
      <div className=''>
        <div className="row border m-5 rounded p-5 shadow mb-3">
          <div className='col-md-6' style={{width: "600px"}} >
            <img
              src={pokemon.sprite}
              alt={pokemon.species}
              className=" rounded-left w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-6 card-body ps-5">
            <h1 className="card-title text-truncate mb-5">{pokemon.species} Details</h1>

            <div className='mb-5'>
              <div className='mb-2'>
                <strong className="me-2">Color:</strong>
                <span>{pokemon.color}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Height:</strong>
                <span>{pokemon.height}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Weight:</strong>
                <span>{pokemon.weight}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Base Stats Total:</strong>
                <span>{pokemon.baseStatsTotal}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Levelling Rate:</strong>
                <span>{pokemon.levellingRate}</span>
              </div>
            </div>

            <div className="mb-5">
              <div className='mb-2'>
                <strong className="me-2">Smogon Tier:</strong>
                <span>{pokemon.smogonTier}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Evolution Level:</strong>
                <span>{pokemon.evolutionLevel}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Maximum Hatch Time:</strong>
                <span>{pokemon.maximumHatchTime}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Minimum Hatch Time:</strong>
                <span>{pokemon.minimumHatchTime}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Other Formes:</strong>
                <span>{pokemon.otherFormes}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Mythical:</strong>
                <span>{pokemon.mythical ? 'Yes' : 'No'}</span>
              </div>
              <div className='mb-2'>
                <strong className="me-2">Legendary:</strong>
                <span>{pokemon.legendary ? 'Yes' : 'No'}</span>
              </div>
            </div>

          </div>
        </div>
        <div className='d-flex justify-content-center'>
        <Link to="/" className='btn btn-primary px-3 py-2'> 
          Return Back to Pokemon List
        </Link>
        </div>
      </div>
    :
    <div>
      <Error />
    </div>  
  }
  </>
  );
};
