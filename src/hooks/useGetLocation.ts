import { useState } from 'react';

const useGetLocation = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getLocation = async () => {
    if (!navigator.geolocation) {
      console.log('Unable to retrieve your location');
    } else {
      try {
        setLoading(true);
        const location = await getCurrentPosition();
        setLocations(location);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          console.error(e);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise(
      (
        resolve: (position: GeolocationPosition) => void,
        reject: (positionError: GeolocationPositionError) => void
      ) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );
  };

  const setLocations = (position: GeolocationPosition) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  return { lat, lng, loading, error, getLocation };
};

export default useGetLocation;
