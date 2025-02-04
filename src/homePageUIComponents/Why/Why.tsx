import Image from "next/image";
import styles from "./Why.module.scss";
import why1 from "@/public/images/why1.svg";
import why2 from "@/public/images/why2.svg";
import why3 from "@/public/images/why3.svg";
import { useTranslations } from "next-intl";

export const Why = () => {
  const t = useTranslations("HomePage.Why");
  return (
    <section className={styles.why}>
      <div className={`${styles.whyContainer} container`}>
        <h2 className={`${styles.title} def-title`}>{t("title")}</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={why1} alt="design icon" />
            </div>
            <h4 className={styles.innerTitle}>{t("innerTitle1")}</h4>
            <p className={styles.text}>{t("text1")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={why2} alt="design icon" />
            </div>
            <h4 className={styles.innerTitle}>{t("innerTitle2")}</h4>
            <p className={styles.text}>{t("text2")}</p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={why3} alt="design icon" />
            </div>
            <h4 className={styles.innerTitle}>{t("innerTitle3")}</h4>
            <p className={styles.text}>{t("text3")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
