import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Your Driver",
  description: "Hire professional car drivers for local and outstation drives",
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
