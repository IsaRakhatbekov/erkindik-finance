"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook для получения текущего пути

export const Header = () => {
  const [burger, setBurger] = useState(false);
  const pathname = usePathname(); // Получаем текущий путь

  const handleClickBurger = () => {
    setBurger((prev) => !prev);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault(); // Останавливаем стандартное поведение ссылки
      const targetSection = document.getElementById(href.slice(1)); // Получаем id секции
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Прокрутка до секции
      }
    }
  };

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
              <a
                href="/"
                onClick={(e) => { handleScrollToSection(e, "/"); handleMobileLinkClick(); }}
                className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
              >
                Главная
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="/service"
                onClick={(e) => { handleScrollToSection(e, "/service"); handleMobileLinkClick(); }}
                className={`${styles.link} ${pathname === "/service" ? styles.active : ""}`}
              >
                Услуги
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="/documents"
                onClick={(e) => { handleScrollToSection(e, "/documents"); handleMobileLinkClick(); }}
                className={`${styles.link} ${pathname === "/documents" ? styles.active : ""}`}
              >
                Документы
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="/about"
                onClick={(e) => { handleScrollToSection(e, "/about"); handleMobileLinkClick(); }}
                className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
              >
                О нас
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="/#news"
                onClick={(e) => { handleScrollToSection(e, "/#news"); handleMobileLinkClick(); }}
                className={`${styles.link} ${pathname === "/#news" ? styles.active : ""}`}
              >
                Новости
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="/contacts"
                onClick={(e) => { handleScrollToSection(e, "/contacts"); handleMobileLinkClick(); }}
                className={`${styles.link} ${pathname === "/contacts" ? styles.active : ""}`}
              >
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
              className={`${styles.menuBtn} ${burger ? styles.menuBtnActive : ""}`}
            >
              <span></span>
            </button>
          </div>
          <div
            className={`${styles.mobileWrapper} ${burger ? styles.mobileWrapperActive : ""}`}
          >
            <ul className={styles.mobileList}>
              <li className={styles.mobileItem}>
                <a
                  href="/"
                  onClick={(e) => { handleScrollToSection(e, "/"); handleMobileLinkClick(); }}
                  className={`${styles.mobileLink} ${pathname === "/" ? styles.active : ""}`}
                >
                  Главная
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a
                  href="/service"
                  onClick={(e) => { handleScrollToSection(e, "/service"); handleMobileLinkClick(); }}
                  className={`${styles.mobileLink} ${pathname === "/service" ? styles.active : ""}`}
                >
                  Услуги
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a
                  href="/documents"
                  onClick={(e) => { handleScrollToSection(e, "/documents"); handleMobileLinkClick(); }}
                  className={`${styles.mobileLink} ${pathname === "/documents" ? styles.active : ""}`}
                >
                  Документы
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a
                  href="/about"
                  onClick={(e) => { handleScrollToSection(e, "/about"); handleMobileLinkClick(); }}
                  className={`${styles.mobileLink} ${pathname === "/about" ? styles.active : ""}`}
                >
                  О нас
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a
                  href="/#news"
                  onClick={(e) => { handleScrollToSection(e, "/#news"); handleMobileLinkClick(); }}
                  className={`${styles.mobileLink} ${pathname === "/#news" ? styles.active : ""}`}
                >
                  Новости
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a
                  href="/contacts"
                  onClick={(e) => { handleScrollToSection(e, "/contacts"); handleMobileLinkClick(); }}
                  className={`${styles.mobileLink} ${pathname === "/contacts" ? styles.active : ""}`}
                >
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
