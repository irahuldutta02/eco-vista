"use client";

import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        params.set("latitude", latitude);
        params.set("longitude", longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, searchParams]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
        {loading && (
          <>
            <Image
              src="/network.gif"
              alt="Loading..."
              height={500}
              width={500}
              className="border rounded-md my-4"
            />
            <p className="text-4xl text-center">Detecting Location...</p>
          </>
        )}
      </div>
    </>
  );
}
