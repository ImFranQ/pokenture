import React from 'react';
import {Button} from '@chakra-ui/react';
import {PaginationComponentProps} from './types';

const Pagination = (props: PaginationComponentProps) => {
  const {total, page, next, prev, setPage} = props;

  return (
    <>
      {page != 1 && (
        <Button m={1} onClick={() => prev ? prev() : null}>Prev</Button>
      )}

      {Array(total).fill(0).map((_, index) => (
        <Button
          key={index}
          m={1}
          onClick={() => setPage ? setPage(index + 1) : null}
          disabled={page == index+1}
        >
          {index + 1}
        </Button>
      ))}

      {total > 10 && (
        <Button m={1} onClick={() => next ? next() : null}>Next</Button>
      )}
    </>
  );
};

export default Pagination;
