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
    <div className="wrapper relative min-h-screen overflow-hidden">
      <Image
        src="/background.png"
        className="bg-img absolute object-cover w-full h-full"
        layout="fill"
        alt="background image"
      />
      <main className="relative z-10 w-full min-h-screen flex items-center justify-center p-4">
        <div className="glass">
          <div className="glass-content flex flex-col justify-center items-center gap-4 p-4">
            <div className="bg-gray-800 rounded-lg p-4">{children}</div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {weather}
              {aqi}
              {wind}
              {temperature}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
