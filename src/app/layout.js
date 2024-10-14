"use client";
import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';

import useMagneticHover from "@/customHooks/useMagneticHover";
import { dm_sans, rubik, outfit, satisfy, jost } from "@/fonts/font";
import { usePathname } from 'next/navigation'; // Import usePathname
import "../../public/assets/css/bootstrap-icons.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {

  useMagneticHover();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Global Sky</title>
      </head>
      <body id="body" className={`${dm_sans.variable} ${rubik.variable} ${outfit.variable} ${satisfy.variable} ${jost.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
