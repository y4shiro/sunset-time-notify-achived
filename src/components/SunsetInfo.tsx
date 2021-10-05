import React, { useMemo, useEffect, useState } from 'react';
import { Input, Text, Select, Stack } from '@chakra-ui/react';

import { useSunsetTime } from '../hooks/useSunsetTime';

import prefJson from '../data/location-of-pref-office-in-japan.json';

const SunsetInfo: React.FC = () => {
  const [prefNum, setPrefNum] = useState(0);
  const sunsetTime: string = useSunsetTime(prefJson[prefNum].lat, prefJson[prefNum].lng);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    setPrefNum(num);

    // prefNum の値を更新した場合は localStorage にも反映させる
    localStorage.setItem('prefNum', JSON.stringify(num));
    console.log('change prefNum for localStorage:', num);
  };

  // ページ読み込み時に localStorage から値を取得して useState に保存
  useEffect(() => {
    const localStorageValue = JSON.parse(localStorage.getItem('prefNum')!);
    if (localStorageValue) setPrefNum(localStorageValue);
    else setPrefNum(0);
    console.log('read localStorage');
  }, []);

  return (
    <Stack m='4' spacing={4}>
      <Select bg={'white'} value={prefNum} onChange={(e) => handleSelectChange(e)}>
        {prefJson.map((data, index) => (
          <option value={index} key={data.pref}>
            {data.pref}
          </option>
        ))}
      </Select>
      <Text>県庁所在地:{prefJson[prefNum].addr}</Text>
      <Text>緯度:{prefJson[prefNum].lat}</Text>
      <Text>経度:{prefJson[prefNum].lng}</Text>
      <Text>本日の日没時刻は{sunsetTime}です</Text>
    </Stack>
  );
};

export default SunsetInfo;
