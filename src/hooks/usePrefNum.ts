import { useState, useEffect } from 'react';

const usePrefNum = () => {
  const [prefNum, setPrefNum] = useState(0);

  // ページ読み込み時に localStorage から値を取得して useState に保存
  useEffect(() => {
    const localStorageValue = JSON.parse(localStorage.getItem('prefNum')!);
    if (localStorageValue) setPrefNum(localStorageValue);
    else setPrefNum(0);
  }, []);

  const changePrefNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    setPrefNum(num);
    console.log('exec changePrefNum:', num);

    // prefNum の値を更新した場合は localStorage にも反映させる
    localStorage.setItem('prefNum', JSON.stringify(num));
  };

  return { prefNum, changePrefNum };
};

export default usePrefNum;
