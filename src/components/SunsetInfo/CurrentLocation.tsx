import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

import { calcSunsetTime, calcSunriseTime } from '../../lib/calcSunTime';
import useGetLocation from '../../hooks/useGetLocation';

const CurrentLocation: React.FC = () => {
  const { lat, lng, loading, error, getLocation } = useGetLocation();

  const sunriseTime: string = calcSunriseTime(lat, lng);
  const sunsetTime: string = calcSunsetTime(lat, lng);

  return (
    <Box>
      <Text>現在位置の取得</Text>
      <Button onClick={() => getLocation()}>現在地を取得する</Button>
      <Text>現在の経度:{loading ? '読込中...' : lat}</Text>
      <Text>現在の緯度:{loading ? '読込中...' : lng}</Text>
      <Text>本日の日出時刻は{lat === 0 ? '00:00:00' : sunriseTime}です</Text>
      <Text>本日の日没時刻は{lng === 0 ? '00:00:00' : sunsetTime}です</Text>
      <Text>エラー:{error}</Text>
    </Box>
  );
};

export default CurrentLocation;
