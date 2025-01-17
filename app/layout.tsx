import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Provider } from "@/components/provider/Provider";

const cabinetGrotesk = localFont({
  src: "../public/fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk",
  weight: "100 400 700",
});

export const metadata: Metadata = {
  title: "Next Frames v2",
  description: "First steps into building with Frames v2",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Next Frames v2",
    description: "First steps into building with Frames v2",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl:
        "https://pub-b8acacbdf4c34874a29a2fdaab996f29.r2.dev/next-frames%20image.png",
      button: {
        title: "Next Frames v2",
        action: {
          type: "launch_frame",
          name: "Next Frames v2",
          url: `https://next-frame-psi.vercel.app/`,
          splashImageUrl:
            "https://pub-b8acacbdf4c34874a29a2fdaab996f29.r2.dev/next-frames%20image.png",
          splashBackgroundColor: "#131313",
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinetGrotesk.className} font-  antialiased`}
        style={{}}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
