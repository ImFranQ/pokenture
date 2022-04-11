import React from 'react';
import {Flex, Container, Box, Text, Spinner} from '@chakra-ui/react';
import {Grid, GridItem} from '@chakra-ui/layout';
import PokemonPreview from '../../components/PokemonPreview';
import {usePokemonList} from '../../sdk/pokeapi/pokemon';
import Pagination from '../../components/Pagination';

const Pokemons = () => {
  const {
    data, isLoading, total, page, next, goPage: setPage, prev, count,
  } = usePokemonList(24);

  const breakPoints = {
    base: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
  };

  return (
    <Container maxW={'6xl'} py={12}>
      {isLoading && <Flex justifyContent={'center'}><Spinner /></Flex>}
      {!isLoading && (
        <>
          <Text mb={3}>Page {page} of {total} | {count} Pokemons</Text>
          <Grid templateColumns={breakPoints} gap={6}>
            {data.map((item, index) => (
              <GridItem key={index}>
                <PokemonPreview name={item.name} />
              </GridItem>
            ))}
          </Grid>
          <Box mt={4} />
          <Pagination {...{total, page, next, setPage, prev}} />
        </>
      )}
    </Container>
  );
};

export default Pokemons;
