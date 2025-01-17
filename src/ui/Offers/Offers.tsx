import Image from "next/image";
import styles from "./Offers.module.scss";
import offers1 from "@/public/images/offer1.png";
import offers2 from "@/public/images/offer2.png";
import offers3 from "@/public/images/offer3.png";

export const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={`${styles.offersContainer} container`}>
        <h2 className={`${styles.offersTitle} def-title`}>
          Что мы предоставляем ?
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={offers1} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Покупка и продажа</h4>
            <p className={styles.text}>
              Финансовых Инструментов Акции, Облигации ИТД
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={offers2} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Конвертация</h4>
            <p className={styles.text}>
              Конвертация денежных средств из одной валюты в другую
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={offers3} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Предоставить ссуду</h4>
            <p className={styles.text}>
              конвертация денежных средств из одной валюты в другую
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
