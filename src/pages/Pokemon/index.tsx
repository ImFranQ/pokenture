import React from 'react';
import {Container, Flex, Spinner} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
import NotFound from '../../components/NotFound';
import PokemonDetail from '../../components/PokemonDetail';
import {useFindPokemon} from '../../sdk/pokeapi/pokemon';

const Pokemon = () => {
  const {name} = useParams();
  const {data, isLoading, hasError} = useFindPokemon(name ?? '');

  return (
    <Container maxW={'2xl'} py={12}>
      <Flex justifyContent={'center'}>
        {isLoading && <Spinner />}
        {!isLoading && hasError && (
          <NotFound
            message={'We can\'t find the pokemon you\'re looking for.'}
          />
        )}
      </Flex>

      {!isLoading && data && (
        <PokemonDetail data={data} />
      )}

    </Container>
  );
};

export default Pokemon;
