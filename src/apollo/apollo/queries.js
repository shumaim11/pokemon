import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
  query GetAllPokemons {
    getAllPokemon {
      backSprite
      baseForme
      baseSpecies
      baseStatsTotal
      bulbapediaPage
      color
      weight
      species
      height
      evolutionLevel
      forme
      formeLetter
      legendary
      levellingRate
      maximumHatchTime
      minimumHatchTime
      mythical
      num
      sprite
      smogonTier
      smogonPage
      shinySprite
      shinyBackSprite
      serebiiPage
      otherFormes
    }
  }
`;
