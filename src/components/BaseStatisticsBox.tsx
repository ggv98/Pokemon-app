import React, { FC } from "react"
import { Box, Text, Flex, Spacer } from '@chakra-ui/react'

interface Props {
    name: string;
    value: number | null
  }

const PockemonCard: FC<Props> = ({name, value}) => {
  return (
      <Box className="stats_box">
        <Text align='center' >{name}</Text>
        <Text align='center'>{value}</Text>
      </Box>
  )
}

export default PockemonCard