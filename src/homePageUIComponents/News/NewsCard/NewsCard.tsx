import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { FC } from "react";
import { link } from "fs";
import { useTranslations } from "next-intl";

interface INewsCard {
  image?: string;
  title: string;
  text: string;
  link: string;
}

export const NewsCard: FC<INewsCard> = ({ image, title, text, link }) => {
  const t = useTranslations("HomePage.News");

  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        {image ? (
          <Image src={image} alt="news image" width={400} height={245} />
        ) : (
          <div className={styles.noImage}>Нет данных</div>
        )}
      </div>
      <div className={styles.inner}>
        <h4 className={styles.innerTitle}>{title}</h4>
        <p className={styles.text}>{text}</p>
        <a href={link} className={styles.innerBtn} target="_blank">
          {t("buttonText")}
        </a>
      </div>
    </li>
  );
};
