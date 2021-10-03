import React from 'react';
// import Image from 'next/image';
import { Box, Image } from '@chakra-ui/react';

const Map: React.FC = () => {
  return (
    <>
      <Box m='4'>
        <Image src='/Map.png' borderRadius='lg' boxShadow='lg' />
      </Box>
    </>
  );
};

export default Map;
