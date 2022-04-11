import React from 'react';
import {Box, Container, Button, Flex} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';

import Header from '../../components/Header';
import Favorites from '../../components/Favorites';
import EvolutionInfo from '../../components/EvolutionInfo';

const Welcome = () => {
  return (
    <Box>
      <Header />
      <Container maxW={'6xl'} py={12}>
        <Favorites />
        <Flex justifyContent={'center'} mt={4}>
          <Button to="/pokemons" as={RouterLink}>See all pokemons</Button>
        </Flex>
      </Container>

      <Container maxW={'6xl'} py={12}>
        <EvolutionInfo />
      </Container>
    </Box>
  );
};

export default Welcome;
