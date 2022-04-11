import React from 'react';
import {SearchIcon} from '@chakra-ui/icons';
import {Button, Flex, Input} from '@chakra-ui/react';
import {useState} from 'react';
import {SearchInputComponentProps} from './type';

const SearchInput = ({onSubmit}: SearchInputComponentProps) => {
  const [term, setTerm] = useState('');

  const submitHandler = (e:any) => {
    e.preventDefault();
    (onSubmit && onSubmit(term));
  };

  return (
    <form onSubmit={submitHandler}>
      <Flex
        alignItems={'center'}
        bg={'gray.600'}
        py={2}
        px={4}
        borderRadius={4}>
        <Input
          colorScheme={'blue'}
          variant='unstyled'
          placeholder='Search pokemon'
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button variant={'link'} type="submit">
          <SearchIcon color={'gray.100'} />
        </Button>
      </Flex>
    </form>
  );
};

export default SearchInput;
