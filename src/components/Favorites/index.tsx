import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import PokemonPreview from '../PokemonPreview';

const Favorites = () => {
  const items = [
    {content: <PokemonPreview name={'charmander'} />},
    {content: <PokemonPreview name={'charizard'} />},
    {content: <PokemonPreview name={'ponyta'} />},
    {content: <PokemonPreview name={'zigzagoon'} />},
  ];

  return (
    <>
      <Box textAlign={'center'}>
        <Text fontSize={'xl'} mb={4} color={'primary.500'}>
          TOP FAVORITES POKEMON
        </Text>
      </Box>
      <Flex flexWrap={'wrap'} justifyContent="center" gap={6}>
        {items.map(({content}, index): any => (
          <Box
            key={index}
            w={{base: '100%', md: '50%', lg: '23%'}}
            maxW={'400px'}
            mb={6}
          >
            {content}
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Favorites;
