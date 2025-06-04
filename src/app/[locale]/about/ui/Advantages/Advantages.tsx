import Image from "next/image";
import styles from "./Advantages.module.scss";
import advantages1 from "@/public/images/pageAbout/Advantages1.png";
import advantages2 from "@/public/images/pageAbout/Advantages2.png";
import advantages3 from "@/public/images/pageAbout/Advantages3.png";
import { useTranslations } from "next-intl";

export const Advantages = () => {
  const t = useTranslations("About.Advantages");
  return (
    <section className={styles.advantages}>
      <div className={`${styles.advantagesContainer} container`}>
        <h2 className={`${styles.advantagesTitle} def-title`}>{t("title")}</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>{t("innerTitle1")}</h4>
            <p className={styles.text}>{t("text1")}</p>
            <div className={styles.imgWrapper}>
              <Image src={advantages1} alt="design icon" loading="lazy" />
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>{t("innerTitle2")}</h4>
            <p className={styles.text}>{t("text2")}</p>
            <div className={styles.imgWrapper}>
              <Image src={advantages2} alt="design icon" loading="lazy" />
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>{t("innerTitle3")}</h4>
            <p className={styles.text}>{t("text3")}</p>
            <div className={styles.imgWrapper}>
              <Image src={advantages3} alt="" loading="lazy" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
