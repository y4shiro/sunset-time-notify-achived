import React, { useEffect, useState } from 'react';
import { Input, Text, Select, Stack } from '@chakra-ui/react';

import prefJson from '../data/location-of-pref-office-in-japan.json';

const SunsetInfo: React.FC = () => {
  const [formValue, setFormValue] = useState<string>('');
  const [pref, setPref] = useState<number>(0);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValue(e.target.value);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPref(parseInt(e.target.value));
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
      <Input value={formValue} onChange={(e) => handleFormChange(e)} placeholder='値を入力' bg={'white'} />
      <Text>フォームの値:{formValue}</Text>
      <Select bg={'white'} onChange={(e) => handleSelectChange(e)}>
        {prefJson.marker.map((pref, index) => (
          <option value={index} key={pref.pref}>
            {pref.pref}
          </option>
        ))}
      </Select>
      <Text>セレクトボックスの値:{prefJson.marker[pref].pref}</Text>
      <Text>useState(pref)の値:{pref}</Text>
    </Stack>
  );
};

export default SunsetInfo;
