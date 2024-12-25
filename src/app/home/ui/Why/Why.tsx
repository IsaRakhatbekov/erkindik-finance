import Image from "next/image";
import styles from "./Why.module.scss";
import why1 from "@/public/images/why1.svg";
import why2 from "@/public/images/why2.svg";
import why3 from "@/public/images/why3.svg";

export const Why = () => {
  return (
    <section className={styles.why}>
      <div className={`${styles.whyContainer} container`}>
        <h2 className={`${styles.title} def-title`}>Почему мы ?</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={why1} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Охват</h4>
            <p className={styles.text}>
              Эркиндик финанс осуществляет полный спектр профессиональной
              деятельности на европейском, американском, российском и кыргызском
              рынках ценных бумаг.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={why2} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Современный подход</h4>
            <p className={styles.text}>
              Мы строим простые и сложные инвестиционные стратегии, которые
              ограничивают риск и позволяет зарабатывать даже в кризисные
              периоды.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={why3} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Успешные стратегии</h4>
            <p className={styles.text}>
              Мы предлагаем инновационные и уникальное многообразие стратегий
              доверительного управления в зависимости от инвестиционных
              предпочтений Клиента.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
