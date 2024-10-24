import Image from "next/image";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({
  children,
  weather,
  aqi,
  wind,
  temperature,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt="background image"
      />
      <main className="!z-50 w-full">
        <div className=" flex justify-center items-center gap-8 w-full p-4 flex-wrap">
          <div>{children}</div>
          <div className=" flex justify-center items-center gap-8 w-full p-4 flex-wrap">
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
