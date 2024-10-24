import WeatherComponent from "@/components/WeatherComponent";

const WeatherPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  console.log({
    latitude,
    longitude,
  });

  return <WeatherComponent lat={latitude} lon={longitude} />;
};

export default WeatherPage;
