import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

import useGetLocation from '../../hooks/useGetLocation';

const CurrentLocation: React.FC = () => {
  const { lat, lng, loading, error, getLocation } = useGetLocation();

  return (
    <Box>
      <Text>現在位置の取得</Text>
      <Button onClick={() => getLocation()}>現在地を取得する</Button>
      <Text>現在の経度:{loading ? '読込中...' : lat}</Text>
      <Text>現在の緯度:{loading ? '読込中...' : lng}</Text>
      <Text>エラー:{error}</Text>
    </Box>
  );
};

export default CurrentLocation;
