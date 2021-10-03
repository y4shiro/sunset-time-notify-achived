import React from 'react';
import { Container, Box, Heading, HStack, SimpleGrid } from '@chakra-ui/react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: React.FC = () => {
  return (
    <>
      <Container as='main' maxW='container.xl'>
        <SimpleGrid columns={{ base: 1, md: 2 }} bg='gray.200'>
          <Map />
          <SunsetInfo />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default MainContent;
