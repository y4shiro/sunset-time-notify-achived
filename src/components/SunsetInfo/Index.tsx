import React from 'react';
import { Box, Button, Text, Select, Stack } from '@chakra-ui/react';

import { calcSunsetTime, calcSunriseTime } from '../../lib/calcSunTime';
import usePrefNum from '../../hooks/usePrefNum';
import useGetLocation from '../../hooks/useGetLocation';

import prefJson from '../../data/location-of-pref-office-in-japan.json';

const SunsetInfo: React.FC = () => {
  const { prefNum, changePrefNum } = usePrefNum();
  const { location, getLocation } = useGetLocation();

  const sunriseTime: string = calcSunriseTime(prefJson[prefNum].lat, prefJson[prefNum].lng);
  const sunsetTime: string = calcSunsetTime(prefJson[prefNum].lat, prefJson[prefNum].lng);

  return (
    <Stack m='4' spacing={4}>
      <Select bg={'white'} value={prefNum} onChange={(e) => changePrefNum(e)}>
        {prefJson.map((data, index) => (
          <option value={index} key={data.pref}>
            {data.pref}
          </option>
        ))}
      </Select>
      <Text>県庁所在地:{prefJson[prefNum].addr}</Text>
      <Text>緯度:{prefJson[prefNum].lat}</Text>
      <Text>経度:{prefJson[prefNum].lng}</Text>
      <Text>本日の日出時刻は{sunriseTime}です</Text>
      <Text>本日の日没時刻は{sunsetTime}です</Text>

      <Box>
        <Text>現在位置の取得</Text>
        <Button onClick={() => getLocation()}>現在地を取得する</Button>
        <Text>現在の経度:{location.lat}</Text>
        <Text>現在の緯度:{location.lng}</Text>
      </Box>
    </Stack>
  );
};

export default SunsetInfo;
