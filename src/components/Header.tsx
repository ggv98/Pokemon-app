import React from "react"
import { Box, chakra} from '@chakra-ui/react'


const Header = () => {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Pokemon app
      </chakra.h1>
    </Box>

  )
}

export default Header