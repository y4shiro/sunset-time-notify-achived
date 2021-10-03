import React from 'react';
import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex bg='blue.500' align='center' justify='space-between'>
      <Heading p={4} color='white'>
        Sunset Time Notify
      </Heading>

      <Spacer />

      <HStack color='white' mr={4} gridGap='4'>
        <Box>
          <Text>About</Text>
        </Box>
        <Box>
          <Text>Contact</Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Header;
