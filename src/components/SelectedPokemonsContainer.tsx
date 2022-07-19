import React, { FC } from "react"
import {
    allPokemon_allPokemon,
  } from "../graphql/__generated__/allPokemon";

import { SimpleGrid, Container, Heading } from '@chakra-ui/react'
import PockemonCard from "./PockemonCard"


interface Props {
    pokemons: (allPokemon_allPokemon | null)[] | null;
    bestMatching: number | null;
  }
const SelectedPokemonsContainer: FC<Props> = ({bestMatching, pokemons}) => {

    if(pokemons && pokemons.length>0){
        return (
            <Container className="main_container" maxW='5xl' bg='white.400'>
                <SimpleGrid minChildWidth='220px' spacing='40px' className="App">
                { pokemons.map(x =>!!x && <PockemonCard isSelected={x.id==bestMatching} onClick={()=>null} key={x.id} pokemon={x} />)}
                </SimpleGrid>
            </Container>
          )
    }
    return (
        <Container className="main_container" maxW='6xl' bg='white.400'>
            <Heading className="grey" mb={4}>Please select your pokemons</Heading>
        </Container>
      )

}

export default SelectedPokemonsContainer;