import Image from "next/image";
import styles from "./Offers.module.scss";
import offers1 from "@/public/images/offer1.png";
import offers2 from "@/public/images/offer2.png";
import offers3 from "@/public/images/offer3.png";
import { useTranslations } from "next-intl";

export const Offers = () => {
  const t = useTranslations("HomePage.Offers");
  return (
    <section className={styles.offers}>
      <div className={`${styles.offersContainer} container`}>
        <h2 className={`${styles.offersTitle} def-title`}>{t("title")}</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={offers1} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle1")}</h3>
            <p className={styles.text}>{t("text1")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={offers2} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle2")}</h3>
            <p className={styles.text}>{t("text2")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={offers3} alt="design icon" />
            </div>
            <h3 className={styles.innerTitle}>{t("innerTitle3")}</h3>
            <p className={styles.text}>{t("text3")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
