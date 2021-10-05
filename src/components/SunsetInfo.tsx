import React, { useEffect, useState } from 'react';
import { Input, Text, Select, Stack } from '@chakra-ui/react';

import { calcSunsetTime } from '../lib/calcSunsetTime';

import prefJson from '../data/location-of-pref-office-in-japan.json';

const SunsetInfo: React.FC = () => {
  const [formValue, setFormValue] = useState<string>('');
  const [prefNum, setPrefNum] = useState<number>(0);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValue(e.target.value);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrefNum(parseInt(e.target.value));
  };

  const sunsetTime = (): string => {
    const time = calcSunsetTime(prefJson[prefNum].lat, prefJson[prefNum].lng);

    return time.toLocaleTimeString();
  };

  // ページ読み込み時に localStorage から値を取得して useState に保存
  useEffect(() => {
    const localStorageValue = JSON.parse(localStorage.getItem('form')!);
    if (localStorageValue) setFormValue(localStorageValue);
  }, []);

  // formValue の値を更新した場合は localStorage にも反映させる
  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(formValue));
  }, [formValue]);

  return (
    <Stack m='4' spacing={4}>
      <Select bg={'white'} onChange={(e) => handleSelectChange(e)}>
        {prefJson.map((data, index) => (
          <option value={index} key={data.pref}>
            {data.pref}
          </option>
        ))}
      </Select>
      <Text>県庁所在地:{prefJson[prefNum].addr}</Text>
      <Text>緯度:{prefJson[prefNum].lat}</Text>
      <Text>経度:{prefJson[prefNum].lng}</Text>
      <Text>本日の日没時刻は{sunsetTime()}です</Text>
    </Stack>
  );
};

export default SunsetInfo;
