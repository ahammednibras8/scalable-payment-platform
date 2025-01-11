import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
