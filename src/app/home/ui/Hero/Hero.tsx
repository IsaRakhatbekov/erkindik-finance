import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImg from "@/public/images/heroBox.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <ul className={styles.wrapper}>
          <li className={styles.content}>
            <h1 className={styles.title}>
              Мы создаем возможности для роста ваших инвестиций
            </h1>
            <p className={styles.text}>
              Инвестируйте в свое будущее с нами Надежные решения для вашего
              капитала
            </p>
            <p className={styles.workTime}>График работы : 10.00 - 19.00</p>
            <div className={styles.btnWrapper}>
              <button className={`${styles.btn} ${styles.btnTransparent}`}>
                Услуги
              </button>
              <button className={`${styles.btn} ${styles.btnYellow}`}>
                Стать инвестором
              </button>
            </div>
          </li>
          <li className={styles.imgWrapper}>
            <Image src={heroImg} alt="Сейф" />
          </li>
        </ul>
      </div>
    </section>
  );
};
