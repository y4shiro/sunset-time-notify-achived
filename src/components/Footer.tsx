import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <>
      <Box bg='gray.600' p='8' textAlign='center'>
        <Heading color='white' fontSize='md'>
          &copy; 2021 y4shiro.
        </Heading>
      </Box>
    </>
  );
};

export default Footer;
