import { calcSunriseTime, calcSunsetTime } from '../lib/calcSunsetTime';

const useSunriseTime = (lat: number, lng: number): string => {
  const time = calcSunriseTime(lat, lng);
  return time.toLocaleTimeString('en-GB'); // AM PM 表記なしの 24 時間制表記を指定
};

const useSunsetTime = (lat: number, lng: number): string => {
  const time = calcSunsetTime(lat, lng);
  return time.toLocaleTimeString('en-GB'); // AM PM 表記なしの 24 時間制表記を指定
};

export { useSunriseTime, useSunsetTime };
