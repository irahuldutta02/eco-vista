import "../globals.css";

export const metadata = {
  title: "EcoVista",
  description: "An app that shows you the environmental key metrics a place.",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  wind,
  weather,
}) {
  return (
    <div className="wrapper">
      {children}
      {weather}
      {aqi}
      {wind}
      {temperature}
    </div>
  );
}
