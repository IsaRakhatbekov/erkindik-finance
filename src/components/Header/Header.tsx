"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
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
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="" />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href="/">
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/service">
                Услуги
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/documents">
                Документы
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/about">
                О нас
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="#">
                Новости
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/contacts">
                Контакты
              </Link>
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
                <Link className={styles.mobileLink} href="/">
                  Главная
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link className={styles.mobileLink} href="/service">
                  Услуги
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link className={styles.mobileLink} href="#">
                  Документы
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link className={styles.mobileLink} href="/about">
                  О нас
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link className={styles.mobileLink} href="#">
                  Новости
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link className={styles.mobileLink} href="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
