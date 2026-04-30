import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({
    coordinates: { lat: 37.7749, lng: -122.4194 }, // Default San Francisco
    loaded: false,
    error: null,
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      }));
      return;
    }

    const onSuccess = (location) => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
        error: null,
      });
    };

    const onError = (error) => {
      setLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: error.code,
          message: error.message,
        },
      }));
    };

    const watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 5000
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return location;
};

export default useGeolocation;
