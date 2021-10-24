import { useState } from 'react';

const useGetLocation = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Unable to retrieve your location');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const success = (position: { coords: { latitude: number; longitude: number } }) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };
  const error = (err: GeolocationPositionError) => {
    console.log(err.message);
  };

  return { lat, lng, getLocation };
};

export default useGetLocation;
