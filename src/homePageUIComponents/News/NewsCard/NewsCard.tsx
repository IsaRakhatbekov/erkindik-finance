"use client";

import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";

interface INewsCard {
  image?: string;
  title: string;
  text: string;
  link?: string;
}

const ibmFont = localFont({
  src: [
    {
      path: "../../../global/fonts/IBMPlexSerif-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../global/fonts/IBMPlexSerif-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm",
  display: "swap",
  preload: true,
});

const nunitoFont = localFont({
  src: [
    {
      path: "../../../global/fonts/NunitoSans10pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../global/fonts/NunitoSans10pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  preload: false,
});

export const NewsCard: FC<INewsCard> = ({ image, title, text, link }) => {
  const t = useTranslations("HomePage.News");
  const [imageError, setImageError] = useState(false);

  const isValidImageUrl =
    image && !image.includes("undefined") && /^https?:\/\//i.test(image);
  const isValidLink =
    link && link.trim() !== "" && /^(https?:\/\/|\/)/i.test(link);

  return (
    <li className={`${styles.item} ${ibmFont.variable} ${nunitoFont.variable}`}>
      <div className={styles.imgWrapper}>
        {isValidImageUrl && !imageError ? (
          <Image
            src={image}
            alt={title || "news image"}
            width={400}
            height={245}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.noImage}>{t("noImage")}</div>
        )}
      </div>
      <div className={styles.inner}>
        <h2 className={styles.innerTitle}>{title}</h2>
        <p className={styles.text}>{text}</p>
        {isValidLink ? (
          <a
            href={link}
            className={styles.innerBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("buttonText")}
          </a>
        ) : (
          <span className={styles.innerBtn}>{t("buttonText")}</span>
        )}
      </div>
    </li>
  );
};
