
import { useQuery } from "@apollo/client";
import React from 'react';
import { useState } from 'react';
import PokemonContainer from "./components/PockemonContainer"
import SelectedPokemonsContainer from "./components/SelectedPokemonsContainer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

import { GET_POCKEMONS } from "./graphql/queries.graphql";
import {
  allPokemon_allPokemon,
  allPokemon,
} from "./graphql/__generated__/allPokemon";
import { Container, Text } from "@chakra-ui/react";
import "./App.css"

const findBestMatching = (pokemons: allPokemon_allPokemon[], pokemon: allPokemon_allPokemon) => {
  var scores = pokemons.map((p) => (p.base_stats!.defense! - pokemon.base_stats!.attack!) +
    p.base_stats!.attack! - pokemon.base_stats!.defense! +
    p.base_stats!.hp! - pokemon.base_stats!.hp!)

  const max = Math.max(...scores);
  const index = scores.indexOf(max);

  return pokemons[index].id
}

const App = () => {
  const { data, loading } = useQuery<allPokemon>(GET_POCKEMONS)

  const [searchInput, setInputText] = useState("");
  const [selectedPokemons, setSelectedPokemons] = useState<allPokemon_allPokemon[]>([]);
  const [selectedOpponent, setSelectedOpponent] = useState<number | null>(null)
  const [bestMatching, setBestMatching] = useState<number | null>(null)

  if (loading) return <Text>Loading...</Text>;

  var filteredPokemons = data && data.allPokemon

  if (data && data.allPokemon) {
    filteredPokemons = data.allPokemon.filter((item) => {
      return item && item.name && item.name.toLowerCase().includes(searchInput.toLowerCase())
    })
  }

  const pokemon_selection = (id: number | null) => {
    if (id){
      var pokemon = filteredPokemons && filteredPokemons.find((pokemon) => pokemon && pokemon.id == id);

      if (selectedPokemons.length < 4) {
        pokemon && setSelectedPokemons([...selectedPokemons, pokemon])
      }
      else {
        setSelectedOpponent(id)
        pokemon && setBestMatching(findBestMatching(selectedPokemons, pokemon))
      }
    }
  }


  return (
    <Container maxW='9xl' bg='white.400'>
      <Header />
      <SearchBar setSearchText={setInputText} />

      {<SelectedPokemonsContainer
        bestMatching={bestMatching}
        pokemons={selectedPokemons}
      />}

      {filteredPokemons &&
        <PokemonContainer
          selectedOpponent={selectedOpponent}
          onClick={pokemon_selection}
          pokemons={filteredPokemons}
        />}

    </Container>
  );

}

export default App;