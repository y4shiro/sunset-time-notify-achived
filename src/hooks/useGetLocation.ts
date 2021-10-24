import { useState } from 'react';

type positionType = {
  coords: { latitude: number; longitude: number };
};

const useGetLocation = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    if (!navigator.geolocation) {
      console.log('Unable to retrieve your location');
    } else {
      try {
        setLoading(true);
        const location = await getCurrentPosition();
        setLocations(location);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
  };

  const getCurrentPosition = (): Promise<positionType> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const setLocations = (position: positionType) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  return { lat, lng, loading, getLocation };
};

export default useGetLocation;
