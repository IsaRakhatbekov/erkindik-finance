import Image from "next/image";

import styles from "./Footer.module.scss";

import logo from "@/public/images/logo.svg";
import { Link } from "@/src/i18n/routing";
import { FC } from "react";
import { IContactsApiResponse } from "@/src/types/IContacts";
import { useTranslations } from "next-intl";

interface IFooterProps {
  data: IContactsApiResponse["data"];
}

export const Footer: FC<IFooterProps> = ({ data }) => {
  const t = useTranslations();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link href="/" className={styles.logo}>
              <Image src={logo} alt="Логотип" />
            </Link>
            <p className={styles.text}>{t("Footer.text")}</p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.innerTitle}>{t("Footer.innerTitle1")}</p>
              <Link className={styles.link} href="/">
                {t("Header.link1")}
              </Link>
              <Link className={styles.link} href="/service">
                {t("Header.link2")}
              </Link>
              <Link className={styles.link} href="/documents">
                {t("Header.link3")}
              </Link>
              <Link className={styles.link} href="/about">
                {t("Header.link4")}
              </Link>

              <Link className={styles.link} href="/contacts">
                {t("Header.link6")}
              </Link>
            </li>
            <li className={styles.item}>
              <p className={styles.innerTitle}>{t("Footer.innerTitle2")}</p>
              <Link className={styles.link} href="/documents">
                {t("Footer.link1")}
              </Link>
              <Link className={styles.link} href="/documents">
                {t("Footer.link2")}
              </Link>
              <Link className={styles.link} href="/documents">
                {t("Footer.link3")}
              </Link>
            </li>
            <li className={styles.item}>
              <p className={styles.innerTitle}>{t("Footer.innerTitle3")}</p>
              {data?.phone ? (
                <a
                  className={`${styles.link} ${styles.contacts}`}
                  href={`tel:+${data?.phone}`}
                >
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.24375 3.39531L3.73984 0.901563C3.91592 0.724712 4.1252 0.584392 4.35567 0.488665C4.58614 0.392938 4.83325 0.34369 5.08281 0.34375C5.5914 0.34375 6.06953 0.542969 6.42812 0.901563L9.11406 3.5875C9.29091 3.76358 9.43123 3.97286 9.52696 4.20333C9.62269 4.4338 9.67193 4.68091 9.67187 4.93047C9.67187 5.43906 9.47266 5.91719 9.11406 6.27578L7.15 8.23984C7.60974 9.25319 8.24893 10.175 9.03672 10.9609C9.82253 11.7506 10.7443 12.3922 11.7578 12.8547L13.7219 10.8906C13.898 10.7138 14.1072 10.5735 14.3377 10.4777C14.5682 10.382 14.8153 10.3328 15.0648 10.3328C15.5734 10.3328 16.0516 10.532 16.4102 10.8906L19.0984 13.5742C19.2755 13.7506 19.4159 13.9603 19.5117 14.1912C19.6074 14.4221 19.6565 14.6696 19.6562 14.9195C19.6562 15.4281 19.457 15.9062 19.0984 16.2648L16.607 18.7562C16.0352 19.3305 15.2453 19.6562 14.4344 19.6562C14.2633 19.6562 14.0992 19.6422 13.9375 19.6141C10.7781 19.0938 7.64453 17.4133 5.11562 14.8867C2.58906 12.3625 0.910936 9.23125 0.383593 6.0625C0.224218 5.09453 0.545311 4.09844 1.24375 3.39531Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  +{data?.phone}
                </a>
              ) : (
                <p className={styles.noData}>Phone: Cannot fetch data</p>
              )}
              {data?.email ? (
                <a
                  className={`${styles.link} ${styles.contacts}`}
                  href={`mailto:${data?.email}`}
                  target="_blank"
                >
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.644 0.800049H18.544C20.044 0.800049 20.8 1.50805 20.8 2.94805V13.052C20.8 14.48 20.044 15.2 18.544 15.2H2.644C1.144 15.2 0.388 14.48 0.388 13.052V2.94805C0.388 1.50805 1.144 0.800049 2.644 0.800049ZM10.588 11.12L18.676 4.48405C18.964 4.24405 19.192 3.69205 18.832 3.20005C18.484 2.70805 17.848 2.69605 17.428 2.99605L10.588 7.62805L3.76 2.99605C3.34 2.69605 2.704 2.70805 2.356 3.20005C1.996 3.69205 2.224 4.24405 2.512 4.48405L10.588 11.12Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  {data?.email}
                </a>
              ) : (
                <p className={styles.noData}>Email: Cannot fetch data</p>
              )}
              {data?.address ? (
                <a
                  className={`${styles.link} ${styles.contacts}`}
                  target="_blank"
                  href={data?.addressLink}
                >
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.13594 18.525C4.23281 16.1426 0 10.3684 0 7.125C0 3.18992 3.13396 0 7 0C10.8646 0 14 3.18992 14 7.125C14 10.3684 9.73438 16.1426 7.86406 18.525C7.41562 19.0928 6.58437 19.0928 6.13594 18.525ZM7 9.5C8.28698 9.5 9.33333 8.43496 9.33333 7.125C9.33333 5.81504 8.28698 4.75 7 4.75C5.71302 4.75 4.66667 5.81504 4.66667 7.125C4.66667 8.43496 5.71302 9.5 7 9.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  {data?.address}
                </a>
              ) : (
                <p className={styles.noData}>Адрес: Cannot fetch data</p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
