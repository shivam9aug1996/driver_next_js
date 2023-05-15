import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Driver On Rent",
  description: "Hire professional car drivers for local and outstation drives",
  keywords: [
    "driver",
    "hire",
    "rent",
    "car",
    "professional",
    "outstation",
    "drivers",
    "call",
    "driver",
    "get",
    "hires",
    "drivers",
  ],
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  generator: "Next.js",
  applicationName: "Driver On Rent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
