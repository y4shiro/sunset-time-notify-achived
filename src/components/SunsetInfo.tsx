import React, { useEffect, useState } from 'react';
import { Box, Heading, Input, Text, Stack } from '@chakra-ui/react';

const SunsetInfo: React.FC = () => {
  const [formValue, setFormValue] = useState('');

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => setFormValue(e.target.value);

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
      <Input value={formValue} onChange={handleChange} placeholder='値を入力' bg={'white'} />
      <Text>フォームの値:{formValue}</Text>
    </Stack>
  );
};

export default SunsetInfo;
