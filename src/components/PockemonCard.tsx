import React, { FC } from "react"
import { Box, Text, Spacer, VStack, HStack } from '@chakra-ui/react'

import { allPokemon_allPokemon } from "../graphql/__generated__/allPokemon";
import BaseStatisticsBox from "./BaseStatisticsBox"

interface Props {
    pokemon: allPokemon_allPokemon;
    key: number | null;
    onClick: any;
    isSelected: boolean;
  }

const PockemonCard: FC<Props> = ({ isSelected, onClick, pokemon}) => {
  return (
    <Box className={`pokemon_card ${isSelected ? "red": " "}`} onClick={onClick}>
        <VStack spacing='24px'>
            <Box className="pokemon_name">
                <Text align='center' fontSize='3xl'>{pokemon.name}</Text>
            </Box>
            <Spacer/>
            <HStack className="pokemon_meta"  spacing='8px' >
                <BaseStatisticsBox name='attack' value={pokemon.base_stats? pokemon.base_stats.attack: 0}/>
                <BaseStatisticsBox name='defense' value={pokemon.base_stats? pokemon.base_stats.defense: 0}/>     
                <BaseStatisticsBox name='hp' value={pokemon.base_stats? pokemon.base_stats.hp: 0}/>
            </HStack>
        </VStack>
    </Box>
  )
}

export default PockemonCard
