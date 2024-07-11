import { Outfit } from "next/font/google";
import "./globals.css";
// import { GoogleTagManager } from '@next/third-parties/google'
// import { GoogleAnalytics } from '@next/third-parties/google'


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "QUIZ VEEV",
  description: "QUIZ VEEV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
      {/* <GoogleTagManager gtmId="G-3YWLPQZ3JQ" /> */}
      {/* <GoogleAnalytics gaId="G-0X14G8YCL8" /> */}
    </html>
  );
}
