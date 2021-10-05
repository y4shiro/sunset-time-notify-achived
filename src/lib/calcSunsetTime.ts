import { getSunrise, getSunset } from 'sunrise-sunset-js';

const calcSunriseTime = (lat: number, lng: number): Date => {
  const sunriseTime = getSunrise(lat, lng);

  return sunriseTime;
};

const calcSunsetTime = (lat: number, lng: number): Date => {
  const sunsetTime = getSunset(lat, lng);

  return sunsetTime;
};

export { calcSunriseTime, calcSunsetTime };
