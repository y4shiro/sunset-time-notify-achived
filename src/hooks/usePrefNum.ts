import { useState, useEffect } from 'react';

const defautlPrefNum = 0; // 0 は北海道を指す

const usePrefNum = () => {
  const [prefNum, setPrefNum] = useState(defautlPrefNum);

  // ページ読み込み時に LocalStorage から値を取得して useState に保存
  // LocalStorage に値が無い場合は defaultPrefNum をセットする
  useEffect(() => {
    const localStorageValue = localStorage.getItem('prefNum');

    if (localStorageValue) {
      setPrefNum(JSON.parse(localStorageValue));
    } else {
      localStorage.setItem('prefNum', JSON.stringify(defautlPrefNum));
      setPrefNum(defautlPrefNum);
    }
  }, []);

  const changePrefNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    setPrefNum(num);

    // prefNum の値を更新した場合は localStorage にも反映させる
    localStorage.setItem('prefNum', JSON.stringify(num));
  };

  return { prefNum, changePrefNum };
};

export default usePrefNum;
