import { gql } from "@apollo/client";

export const GET_POCKEMONS = gql`
  query allPokemon{
            allPokemon{
                id
                name
                base_stats{
                    hp,
                    attack,
                    defense,
                }
            } 
        }
`;