import { useState } from 'react';

const useGetLocation = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const getLocation = () => {
    if (typeof navigator === 'undefined') {
      console.log('Unable to retrieve your location');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const success = (position: { coords: { latitude: number; longitude: number } }) => {
    console.log(typeof position.coords.latitude);
    const latVal = position.coords.latitude;
    const lngVal = position.coords.longitude;
    setLocation({ ...location, lat: latVal, lng: lngVal });
  };
  const error = () => {
    console.log('error');
  };

  return { location, getLocation };
};

export default useGetLocation;
