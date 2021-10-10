import { getSunrise, getSunset } from 'sunrise-sunset-js';

const calcSunriseTime = (lat: number, lng: number): string => {
  const sunriseTime = getSunrise(lat, lng);

  return sunriseTime.toLocaleTimeString('en-GB');
};

const calcSunsetTime = (lat: number, lng: number): string => {
  const sunsetTime = getSunset(lat, lng);

  return sunsetTime.toLocaleTimeString('en-GB');
};

export { calcSunriseTime, calcSunsetTime };
