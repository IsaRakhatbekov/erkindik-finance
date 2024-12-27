"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
import { useEffect, useState } from "react";
export const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleClickBurger = () => {
    setBurger((prev) => !prev);
  };

  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [burger]);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>
            <Image src={logo} alt="" />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Главная
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/service">
                Услуги
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/documents">
                Документы
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/about">
                О нас
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Новости
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/contacts">
                Контакты
              </a>
            </li>
          </ul>
          <div className={styles.phoneWrapper}>
            <a className={styles.phone} href="tel:+996700567845">
              +996 700 56 78 45
            </a>
            <button
              onClick={handleClickBurger}
              className={`${styles.menuBtn} ${
                burger ? styles.menuBtnActive : ""
              }`}
            >
              <span></span>
            </button>
          </div>
          <div
            className={`${styles.mobileWrapper} ${
              burger ? styles.mobileWrapperActive : ""
            }`}
          >
            <ul className={styles.mobileList}>
              <li className={styles.mobileItem}>
                <a className={styles.mobileLink} href="/">
                  Главная
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a className={styles.mobileLink} href="/service">
                  Услуги
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a className={styles.mobileLink} href="#">
                  Документы
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a className={styles.mobileLink} href="/about">
                  О нас
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a className={styles.mobileLink} href="#">
                  Новости
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a className={styles.mobileLink} href="/contacts">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
