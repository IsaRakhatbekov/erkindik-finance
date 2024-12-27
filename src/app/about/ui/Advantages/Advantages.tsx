import Image from "next/image";
import styles from "./Advantages.module.scss";
import advantages1 from "@/public/images/pageAbout/Advantages1.png";
import advantages2 from "@/public/images/pageAbout/Advantages2.png";
import advantages3 from "@/public/images/pageAbout/Advantages3.png";

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={`${styles.advantagesContainer} container`}>
        <h2 className={`${styles.advantagesTitle} def-title`}>Наши плюсы </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>Надёжность</h4>
            <p className={styles.text}>Работаем с проверенными партнёрами.</p>
            <div className={styles.imgWrapper}>
              <Image src={advantages1} alt="" />
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>Индивидуальный подход</h4>
            <p className={styles.text}>Учитываем ваши потребности.</p>
            <div className={styles.imgWrapper}>
              <Image src={advantages2} alt="" />
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.innerTitle}>Экспертность</h4>
            <p className={styles.text}>Помогаем достичь финансовых целей</p>
            <div className={styles.imgWrapper}>
              <Image src={advantages3} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
