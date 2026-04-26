import "./globals.css";

export const metadata = {
  title: "BLOOMZ.io",
  description: "Bioactive Library for Mass Spectrometry Instant Optimization",
  icons: {
    icon: "/assets/logos/bloomz-favicon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
