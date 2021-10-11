import { useState } from 'react';

const useGetLocation = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Unable to retrieve your location');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const success = (position: { coords: { latitude: number; longitude: number } }) => {
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
