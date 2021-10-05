import { getSunrise, getSunset } from 'sunrise-sunset-js';

const calcSunriseTime = (lat: number, lng: number): Date => {
  const sunsetTime = getSunrise(lat, lng);

  return sunsetTime;
};

const calcSunsetTime = (lat: number, lng: number): Date => {
  const sunsetTime = getSunset(lat, lng);

  return sunsetTime;
};

export { calcSunriseTime, calcSunsetTime };
