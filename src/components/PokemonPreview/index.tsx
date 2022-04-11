import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/layout';
import {
  Spinner, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter, Button, useDisclosure,
} from '@chakra-ui/react';
import {useFindPokemon} from '../../sdk/pokeapi/pokemon';
import Avatar from '../Avatar';
import PokemonDetail from '../PokemonDetail';
import {ProkemonPreviewProps} from './types';

const PokemonPreview = ({name}: ProkemonPreviewProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {data, isLoading} = useFindPokemon(name);

  return (
    <Box>
      {isLoading && <Flex justifyContent={'center'}><Spinner /></Flex>}

      {!isLoading && data && (
        <Box bg={'gray.700'} borderRadius={10} overflow={'hidden'}>
          <Flex
            bg={'primary.500'}
            w={'100%'} h={'60px'}
            flexDir={'column'}
            alignItems={'center'}
            position={'relative'}
          >
            <Box position={'absolute'} top={4}>
              <Avatar image={data.sprites.front_default} />
            </Box>
          </Flex>

          <Flex p={4} mt={12} flexDir={'column'} alignItems={'center'} >
            <Text
              fontSize={'xl'}
              color={'primary.500'}
              textTransform={'uppercase'}
            >
              {data.name}
            </Text>

            <Button
              onClick={onOpen}
              colorScheme={'primary'}
              size={'xs'}
              borderRadius={15}
              mt={3}
              w={'100%'}
            >
              See more
            </Button>
          </Flex>
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pokemon Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PokemonDetail data={data} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PokemonPreview;
