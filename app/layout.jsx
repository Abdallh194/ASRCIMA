import "./globals.css";
export const metadata = {
  title: "ASR Cinima",
  description: "You will find all your favorite movies here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
