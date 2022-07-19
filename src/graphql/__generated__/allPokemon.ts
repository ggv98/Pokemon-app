/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPokemon
// ====================================================

export interface allPokemon_allPokemon_base_stats {
  __typename: "Stats";
  hp: number | null;
  attack: number | null;
  defense: number | null;
}

export interface allPokemon_allPokemon {
  __typename: "Pokemon";
  id: number | null;
  name: string | null;
  /**
   * base stats of the queried Pokemon
   */
  base_stats: allPokemon_allPokemon_base_stats | null;
}

export interface allPokemon {
  /**
   * get range of Pokemon starting from start variable
   */
  allPokemon: (allPokemon_allPokemon | null)[] | null;
}
