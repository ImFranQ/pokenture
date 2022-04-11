import React from 'react';
import {Flex, Text} from '@chakra-ui/react';

const NotFoundMessage = () => {
  return (
    <>
      <Flex alignItems={'center'} flexDir={'column'}>
        <Text fontSize={'3xl'}>Error: Not found</Text>
      </Flex>
    </>
  );
};

export default NotFoundMessage;
