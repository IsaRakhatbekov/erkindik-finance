"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import heroImg from "@/public/images/heroBox.png";
import heroBoxMobile from "@/public/images/heroBlackBox.svg";

export const ResponsiveImage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateImage = () => setIsMobile(window.innerWidth < 500);
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <Image src={isMobile ? heroBoxMobile : heroImg} alt="Сейф" loading="lazy" />
  );
};
