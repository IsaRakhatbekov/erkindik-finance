import Image from "next/image";
import styles from "./Leader.module.scss";
import leader from "@/public/images/pageAbout/liderImg.png";
import { useTranslations } from "next-intl";
export const Leader = () => {
  const t = useTranslations("About.Leader");
  return (
    <section className={styles.leader}>
      <div className={`${styles.leaderContainer} container`}>
        <h2 className={`${styles.leaderTitle} def-title`}>{t("title")}</h2>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.text}>{t("text1")}</p>
            <p className={styles.text}>{t("text2")}</p>
            <p className={styles.text}>{t("text3")}</p>
          </div>
          <div className={styles.imgWrapper}>
            <Image src={leader} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
