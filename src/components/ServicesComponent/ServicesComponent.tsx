import Image from "next/image";
import styles from "./ServicesComponent.module.scss";
import Services1 from "@/public/images/moneySvg.svg";
import Services2 from "@/public/images/plusSvg.svg";
import Services3 from "@/public/images/wallet.svg";
import Services4 from "@/public/images/handAndCoinsSvg.svg";
import { useTranslations } from "next-intl";

export const ServicesComponent = () => {
  const t = useTranslations("HomePage.ServicesComponent");
  return (
    <section className={styles.services} id="service">
      <div className={`${styles.servicesContainer} container`}>
        <h2 className={`${styles.title} def-title`}>{t("title")}</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services1} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle1")}</h3>
            <p className={styles.text}>{t("text1")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services2} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle2")}</h3>
            <p className={styles.text}>{t("text2")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services3} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle3")}</h3>
            <p className={styles.text}>{t("text3")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services4} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle4")}</h3>
            <p className={styles.text}>{t("text4")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
