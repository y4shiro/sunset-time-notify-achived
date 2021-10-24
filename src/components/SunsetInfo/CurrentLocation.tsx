import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

import useGetLocation from '../../hooks/useGetLocation';

const CurrentLocation: React.FC = () => {
  const { lat, lng, getLocation } = useGetLocation();

  return (
    <Box>
      <Text>現在位置の取得</Text>
      <Button onClick={() => getLocation()}>現在地を取得する</Button>
      <Text>現在の経度:{lat}</Text>
      <Text>現在の緯度:{lng}</Text>
    </Box>
  );
};

export default CurrentLocation;
