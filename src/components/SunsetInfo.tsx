import React, { useState } from 'react';
import { Box, Heading, Input, Text, Stack } from '@chakra-ui/react';

const SunsetInfo: React.FC = () => {
  const [formValue, setFormValue] = useState('');

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => setFormValue(e.target.value);

  return (
    <Stack m='4' spacing={4}>
      <Input value={formValue} onChange={handleChange} variant='filled' placeholder='値を入力' />
      <Text>フォームの値:{formValue}</Text>
    </Stack>
  );
};

export default SunsetInfo;
