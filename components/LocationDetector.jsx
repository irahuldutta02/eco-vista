"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaSpinner,
  FaRedo,
} from "react-icons/fa";

const LocationDetector = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const detectLocation = useCallback(() => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams(searchParams);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);

            params.set("latitude", position.coords.latitude);
            params.set("longitude", position.coords.longitude);
            setLoading(false);
            router.push(`/current?${params.toString()}`);
          },
          (geoError) => {
            setError(new Error("Permission denied"));
            setLoading(false);
            console.error(geoError);
          }
        );
      }
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [searchParams, router]);

  useEffect(() => {
    detectLocation();
  }, [detectLocation, pathName]);

  return (
    <div className="location-detector bg-white shadow-md rounded-lg p-4 max-w-md mx-auto mt-4">
      {error ? (
        <div className="flex flex-col items-center text-red-500">
          <div className="flex items-center mb-2">
            <FaExclamationTriangle className="mr-2" />
            <p className="error-message font-semibold">
              Error detecting location: {error.message}
            </p>
          </div>
          <button
            onClick={detectLocation}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FaRedo className="mr-2" />
            Retry
          </button>
        </div>
      ) : loading ? (
        <div className="flex items-center text-blue-500">
          <FaSpinner className="animate-spin mr-2" />
          <p className="loading-message font-semibold">
            Detecting your location...
          </p>
        </div>
      ) : (
        <div className="flex items-center text-green-500">
          <FaMapMarkerAlt className="mr-2" />
          <p className="success-message font-semibold">Location detected</p>
        </div>
      )}
    </div>
  );
};

export default LocationDetector;
