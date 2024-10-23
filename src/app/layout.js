"use client";
import { useEffect } from "react";
import { dm_sans, rubik, outfit, satisfy, jost } from "@/fonts/font";
import "../../public/assets/css/bootstrap-icons.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({children}) {
  useEffect(() => {
    // Add the class to the body element when the component is mounted
    document.body.classList.add('backgraound-color');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('backgraound-color');
    };
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
     
      <body id="body" className={`${dm_sans.variable} ${rubik.variable} ${outfit.variable} ${satisfy.variable} ${jost.variable}`}>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
