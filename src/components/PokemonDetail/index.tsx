import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import Avatar from '../Avatar';
import {PokemonDetailComponentProps} from './types';

const PokemonDetail = ({data}: PokemonDetailComponentProps) => {
  return (
    <>
      <Box
        borderRadius={10}
        borderColor={'gray.700'}
        borderWidth={1}
        p={6}
      >
        <Flex alignItems={'center'} flexDir={'column'} px={16}>
          <Flex>
            <Box title={'Default'}>
              <Avatar image={data?.sprites.front_default} />
            </Box>
            <Box ml={3} title={'Shiny'}>
              <Avatar image={data?.sprites.front_shiny} />
            </Box>
          </Flex>
          <Text fontSize={'xl'} mb={1} textTransform={'uppercase'}>
            {data?.name} ({data.id})
          </Text>
          <Flex>
            {data?.types.map((type: any, index:number) => (
              <Box key={index}
                className={type.type.name}
                title={type.type.name}
                mx={1}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default PokemonDetail;
