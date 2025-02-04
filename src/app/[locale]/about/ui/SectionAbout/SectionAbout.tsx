import Image from "next/image";
import styles from "./SectionAbout.module.scss";
import heroImg from "@/public/images/pageAbout/aboutHeroImg.png";
import { useTranslations } from "next-intl";

export const SectionAbout = () => {
  const t = useTranslations("About.SectionAbout");
  return (
    <section className={styles.about}>
      <div className={`${styles.aboutContainer} container`}>
        <ul className={styles.list}>
          <li className={styles.content}>
            <h2 className={`${styles.aboutTitle} def-title`}>{t("title")}</h2>
            <p className={styles.text}>{t("text1")}</p>
            <p className={styles.text}>{t("text2")}</p>
          </li>
          <li className={styles.imgWrapper}>
            <Image src={heroImg} alt="картинка с людьми" />
          </li>
        </ul>
      </div>
    </section>
  );
};
