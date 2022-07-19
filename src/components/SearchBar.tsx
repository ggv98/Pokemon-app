import React, { FC } from "react"
import { InputLeftElement, InputGroup, Input, Box, Center } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
interface Props {
    setSearchText: (a: string) => void
  }

const SearchBar: FC<Props> = ({setSearchText}) => {
    const _handleKeyDown = (e: { key: string; target: { value: any; }; }) => {
        if (e.key === 'Enter') {
          setSearchText(e.target.value)
        }
      }
    return (
        <Box>
            <Center className="search" bg='white.400'>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                    />
                    <Input type='text' placeholder='Search'  onKeyPress={_handleKeyDown}/>
                </InputGroup>
   
            </Center>
        </Box>
    );
}

export default SearchBar