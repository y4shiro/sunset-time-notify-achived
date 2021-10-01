import type { NextPage } from 'next';
import Image from 'next/image';

import React from 'react';
import { Box, chakra } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <h1>Sunset Time Notify</h1>
      <Box>
        <chakra.h2 color='blue.600'>H2 要素に Chakra UI 適用</chakra.h2>
      </Box>
    </>
  );
};

export default Home;
