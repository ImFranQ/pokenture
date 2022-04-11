import React from 'react';
import {Box} from '@chakra-ui/react';
import {AvatarComponentProps} from './types';

const Avatar = (props: AvatarComponentProps) => {
  const imgContainerProps: any = {
    h: '94px',
    w: '94px',
    bg: 'gray.100',
    p: 3,
    borderRadius: '50%',
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: 'gray.700',
  };

  return (
    <Box {...imgContainerProps} >
      <img src={props.image} alt="" />
    </Box>
  );
};

export default Avatar;
