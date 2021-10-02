import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: React.FC = () => {
  return (
    <>
      <HStack bg='gray.200' spacing='16px'>
        <Map />
        <SunsetInfo />
      </HStack>
    </>
  );
};

export default MainContent;
