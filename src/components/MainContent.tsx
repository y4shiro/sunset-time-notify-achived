import React from 'react';
import { Container, Box, Heading, HStack } from '@chakra-ui/react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: React.FC = () => {
  return (
    <>
      <Container maxW='container.lg.lg'>
        <HStack as='main' bg='gray.200' spacing='16px'>
          <Map />
          <SunsetInfo />
        </HStack>
      </Container>
    </>
  );
};

export default MainContent;
