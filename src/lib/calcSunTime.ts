import { getSunrise, getSunset } from 'sunrise-sunset-js';

type SunTimeFunc = (lat: number, lng: number) => string;

const calcSunriseTime: SunTimeFunc = (lat, lng) => {
  const sunriseTime = getSunrise(lat, lng);
  return sunriseTime.toLocaleTimeString('en-GB');
};

const calcSunsetTime: SunTimeFunc = (lat, lng) => {
  const sunsetTime = getSunset(lat, lng);
  return sunsetTime.toLocaleTimeString('en-GB');
};

export { calcSunriseTime, calcSunsetTime };
