import Image from "next/image";
import styles from "./Partners.module.scss";
export const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={`${styles.partnersContainer} container`}>
        <h2 className={`${styles.partnersTitle} def-title`}>Наши партнеры</h2>
        <ul className={styles.list}>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
          <li className={styles.item}>{/* <Image src={} alt=""/> */}</li>
        </ul>
      </div>
    </section>
  );
};
