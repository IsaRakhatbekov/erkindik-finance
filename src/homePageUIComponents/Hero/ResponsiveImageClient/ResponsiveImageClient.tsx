"use client";

import Image, { StaticImageData } from "next/image";
import heroImg from "@/public/images/heroBox.png";
import heroBoxMobile from "@/public/images/heroBlackBox.svg";
import styles from "./ResponsiveImage.module.scss"; // Создадим новый CSS-модуль

export const ResponsiveImage = ({
  desktopSrc,
  mobileSrc,
}: {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
}) => (
  <div className={styles.responsiveContainer}>
    <Image
      src={desktopSrc}
      alt="Сейф"
      className={styles.desktopImage}
      priority
      quality={85}
    />
    <Image
      src={mobileSrc}
      alt="Сейф"
      className={styles.mobileImage}
      priority
      quality={75}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);
