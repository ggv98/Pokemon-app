import React, { FC } from "react"
import {
    allPokemon_allPokemon,
  } from "../graphql/__generated__/allPokemon";

import { SimpleGrid, Container } from '@chakra-ui/react'
import PockemonCard from "./PockemonCard"


interface Props {
    pokemons: (allPokemon_allPokemon | null)[] | null;
    onClick: (a: number | null) => void;
    selectedOpponent: number | null;
  }
const PokemonContainer: FC<Props> = ({ selectedOpponent, onClick, pokemons }) => {
    return (
        <Container className="main_container" maxW='5xl' bg='white.400'>
            <SimpleGrid minChildWidth='220px' spacing='40px' className="App">
                {pokemons && pokemons.map(x => !!x && <PockemonCard isSelected={selectedOpponent==x.id} onClick={() => onClick(x.id)} key={x.id} pokemon={x} />)}
            </SimpleGrid>
        </Container>
  )
}

export default PokemonContainer