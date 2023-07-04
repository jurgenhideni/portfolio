import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Jurgen Hideni - Portfolio",
  description: "Junior Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </html>
  );
}
