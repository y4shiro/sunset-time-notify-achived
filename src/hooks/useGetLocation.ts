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
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };
  const error = () => {
    console.log('error');
  };

  return { location, getLocation };
};

export default useGetLocation;
