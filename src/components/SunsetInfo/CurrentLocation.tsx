import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

import useGetLocation from '../../hooks/useGetLocation';

const CurrentLocation: React.FC = () => {
  const { location, getLocation } = useGetLocation();

  return (
    <Box>
      <Text>現在位置の取得</Text>
      <Button onClick={() => getLocation()}>現在地を取得する</Button>
      <Text>現在の経度:{location.lat}</Text>
      <Text>現在の緯度:{location.lng}</Text>
    </Box>
  );
};

export default CurrentLocation;
