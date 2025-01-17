"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook для получения текущего пути

interface IHeaderProps {
  phone: string;
}

export const Header: FC<IHeaderProps> = ({ phone }) => {
  const [burger, setBurger] = useState(false);
  const pathname = usePathname(); // Получаем текущий путь

  const handleClickBurger = () => {
    setBurger((prev) => !prev);
  };

  // const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  //   if (href.startsWith("#")) {
  //     e.preventDefault(); // Останавливаем стандартное поведение ссылки
  //     const targetSection = document.getElementById(href.slice(1)); // Получаем id секции
  //     if (targetSection) {
  //       targetSection.scrollIntoView({ behavior: "smooth" }); // Прокрутка до секции
  //     }
  //   }
  // };

  const handleMobileLinkClick = () => {
    setBurger(false); // Закрываем меню при клике на мобильные ссылки
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
            <Image src={logo} alt="Логотип" />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                href="/"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname === "/" ? styles.active : ""
                }`}
              >
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/service"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname === "/service" ? styles.active : ""
                }`}
              >
                Услуги
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/documents"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname === "/documents" ? styles.active : ""
                }`}
              >
                Документы
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/about"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname === "/about" ? styles.active : ""
                }`}
              >
                О нас
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/#news"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname === "/#news" ? styles.active : ""
                }`}
              >
                Новости
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/contacts"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname === "/contacts" ? styles.active : ""
                }`}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className={styles.phoneWrapper}>
            <a className={styles.phone} href={`tel:+${phone}`}>
              {`+${phone}`}
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
                <Link
                  href="/"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname === "/" ? styles.active : ""
                  }`}
                >
                  Главная
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/service"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname === "/service" ? styles.active : ""
                  }`}
                >
                  Услуги
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/documents"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname === "/documents" ? styles.active : ""
                  }`}
                >
                  Документы
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/about"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname === "/about" ? styles.active : ""
                  }`}
                >
                  О нас
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/#news"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname === "/#news" ? styles.active : ""
                  }`}
                >
                  Новости
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/contacts"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname === "/contacts" ? styles.active : ""
                  }`}
                >
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
