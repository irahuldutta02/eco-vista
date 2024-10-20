import "./globals.css";

export const metadata = {
  title: "EcoVista",
  description: "An app that shows you the environmental key metrics a place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
