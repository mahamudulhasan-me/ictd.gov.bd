import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
  description: " তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
};

// Update the path to reflect the font in the public directory

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
