import { getSunrise, getSunset } from 'sunrise-sunset-js';

type SunTimeFunc = (lat: number, lng: number, date?: Date) => string;

const calcSunriseTime: SunTimeFunc = (lat, lng, date = new Date()) => {
  const sunriseTime = getSunrise(lat, lng, date);
  return sunriseTime.toLocaleTimeString('en-GB');
};

const calcSunsetTime: SunTimeFunc = (lat, lng, date = new Date()) => {
  const sunsetTime = getSunset(lat, lng, date);
  return sunsetTime.toLocaleTimeString('en-GB');
};

export { calcSunriseTime, calcSunsetTime };
