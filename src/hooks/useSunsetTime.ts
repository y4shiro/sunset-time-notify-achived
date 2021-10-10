import { calcSunriseTime, calcSunsetTime } from '../lib/calcSunsetTime';

const useSunriseTime = (lat: number, lng: number) => {
  const time = calcSunriseTime(lat, lng);
  return time.toLocaleTimeString('en-GB');
};

const useSunsetTime = (lat: number, lng: number): string => {
  const time = calcSunsetTime(lat, lng);
  return time.toLocaleTimeString('en-GB');
};

export { useSunriseTime, useSunsetTime };
