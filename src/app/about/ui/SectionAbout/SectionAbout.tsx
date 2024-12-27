import Image from "next/image";
import styles from "./SectionAbout.module.scss";
import heroImg from "@/public/images/pageAbout/aboutHeroBg.png";

export const SectionAbout = () => {
  return (
    <section className={styles.about}>
      <div className={`${styles.aboutContainer} container`}>
        <ul className={styles.list}>
          <li className={styles.content}>
            <h2 className={`${styles.aboutTitle} def-title`}>О нас</h2>
            <p className={styles.text}>
              Компания «Эркиндик Файненс» — это надёжный брокер, который
              предоставляет клиентам полный спектр услуг на финансовых рынках.
              Мы помогаем эффективно управлять вашими активами, осуществлять
              сделки с ценными бумагами и валютами, а также обеспечиваем
              сохранность ваших финансовых инструментов.
            </p>
            <p className={styles.text}>
              Мы работаем с клиентами по всему миру и предоставляем услуги в
              различных валютах, таких как KGS, USD, EUR, CNY, и другие.
              Основные направления переводов — Кыргызстан, Турция, ОАЭ и
              Гонконг.
            </p>
          </li>
          <li className={styles.imgWrapper}>
            <Image src={heroImg} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};
