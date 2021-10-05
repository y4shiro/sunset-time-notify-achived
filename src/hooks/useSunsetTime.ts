import { calcSunsetTime } from '../lib/calcSunsetTime';

const useSunsetTime = (lat: number, lng: number): string => {
  const time = calcSunsetTime(lat, lng);
  return time.toLocaleTimeString();
};

export { useSunsetTime };
