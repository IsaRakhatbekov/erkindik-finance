import { FC } from "react";
import styles from "./Map.module.scss";
import { useTranslations } from "next-intl";

interface IMapProps {
  googleMapsLink: string;
}
export const Map: FC<IMapProps> = ({ googleMapsLink }) => {
  const t = useTranslations("Contacts.Map")
  return (
    <section className={styles.map}>
      <div className={`${styles.mapContainer} container`}>
        <h2 className={`${styles.mapTitle} def-title`}>{t("title")}</h2>
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.iframe}
            src={googleMapsLink}
            style={{ border: 0 }} // Передаем объект, а не строку
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
