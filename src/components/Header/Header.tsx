"use client";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "@/public/images/logo.svg";
import { FC, useEffect, useState } from "react";
import { Link, routing } from "@/src/i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

interface IHeaderProps {
  phone: string;
}

export const Header: FC<IHeaderProps> = ({ phone }) => {
  const t = useTranslations("Header");
  const [burger, setBurger] = useState(false);
  const pathname = usePathname();

  const handleClickBurger = () => {
    setBurger((prev) => !prev);
  };

  const handleMobileLinkClick = () => {
    setBurger(false);
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
                  routing.locales.some((lang) => pathname.endsWith(lang))
                    ? styles.active
                    : ""
                }`}
              >
                {t("link1")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/service"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname.endsWith("/service") ? styles.active : ""
                }`}
              >
                {t("link2")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/documents"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname.endsWith("/documents") ? styles.active : ""
                }`}
              >
                {t("link3")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/about"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname.endsWith("/about") ? styles.active : ""
                }`}
              >
                {t("link4")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/#news"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname.endsWith("#news") ? styles.active : ""
                }`}
              >
                {t("link5")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/contacts"
                onClick={handleMobileLinkClick}
                className={`${styles.link} ${
                  pathname.endsWith("/contacts") ? styles.active : ""
                }`}
              >
                {t("link6")}
              </Link>
            </li>
            <li>
              <LocaleSwitcher />
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
                    routing.locales.some((lang) => pathname.endsWith(lang))
                      ? styles.active
                      : ""
                  }`}
                >
                  {t("link1")}
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/service"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname.endsWith("/service") ? styles.active : ""
                  }`}
                >
                  {t("link2")}
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/documents"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname.endsWith("/documents") ? styles.active : ""
                  }`}
                >
                  {t("link3")}
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/about"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname.endsWith("/about") ? styles.active : ""
                  }`}
                >
                  {t("link4")}
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/#news"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname.endsWith("#news") ? styles.active : ""
                  }`}
                >
                  {t("link5")}
                </Link>
              </li>
              <li className={styles.mobileItem}>
                <Link
                  href="/contacts"
                  onClick={handleMobileLinkClick}
                  className={`${styles.mobileLink} ${
                    pathname.endsWith("/contacts") ? styles.active : ""
                  }`}
                >
                  {t("link6")}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
