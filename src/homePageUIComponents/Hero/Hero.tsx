import styles from "./Hero.module.scss";
import { FC } from "react";
import { IContactsApiResponse } from "@/src/types/IContacts";
import { Link } from "@/src/i18n/routing";
import { ResponsiveImage } from "./ResponsiveImageClient/ResponsiveImageClient";
import { getTranslations } from "next-intl/server";

export const Hero: FC = async () => {
  const t = await getTranslations("HomePage.Hero");

  let contactsData: IContactsApiResponse["data"] = {
    phone: "lorem ipsum",
    email: "lorem ipsum",
    address: "lorem ipsum",
    addressLink: "lorem ipsum",
    schedule: "lorem ipsum",
    googleMapsLink: "lorem ipsum",
  };

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`);
    if (!res.ok) {
      throw new Error("Failed to fetch contacts");
    }

    const response: IContactsApiResponse = await res.json();
    contactsData = response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <ul className={styles.wrapper}>
          <li className={styles.content}>
            <h1 className={styles.title}>{t("title")}</h1>
            <p className={styles.text}>{t("text")}</p>
            <p
              className={styles.workTime}
            >{`${t("workTime")} : ${contactsData?.schedule}`}</p>
            <div className={styles.btnWrapper}>
              <Link
                href={"/service"}
                className={`${styles.btn} ${styles.btnTransparent}`}
              >
                {t("firstBtn")}
              </Link>
              <Link
                href="/documents"
                className={`${styles.btn} ${styles.btnYellow}`}
              >
                {t("secondBtn")}
              </Link>
            </div>
          </li>
          <li className={styles.imgWrapper}>
            <ResponsiveImage />
          </li>
        </ul>
      </div>
    </section>
  );
};
