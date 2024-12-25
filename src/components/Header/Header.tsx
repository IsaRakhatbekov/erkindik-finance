import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>
            <Image src={logo} alt="" />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Главная
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Услуги
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Документы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                О нас
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Новости
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Контакты
              </a>
            </li>
          </ul>
          <a className={styles.phone} href="tel:+996700567845">
            +996700567845
          </a>
        </nav>
      </div>
    </header>
  );
};
