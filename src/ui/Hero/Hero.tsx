"use client";
import Image from "next/image";
import styles from "./Hero.module.scss";
import heroImg from "@/public/images/heroBox.png";
import heroBoxMobile from "@/public/images/heroBlackBox.svg";
import { FC, useEffect, useState } from "react";
import { IContactsApiResponse } from "@/src/types/IContacts";

interface HeroProps {
  contactsData: IContactsApiResponse["data"];
}

export const Hero: FC<HeroProps> = ({ contactsData }) => {
  const [box, setBox] = useState(false);

  const changeImg = () => {
    setBox(window.innerWidth < 500);
  };

  useEffect(() => {
    changeImg();
    window.addEventListener("resize", changeImg);

    return () => {
      window.removeEventListener("resize", changeImg);
    };
  }, []);

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
            <p
              className={styles.workTime}
            >{`График работы : ${contactsData?.schedule}`}</p>
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
            <Image src={box ? heroBoxMobile : heroImg} alt="Сейф" />
          </li>
        </ul>
      </div>
    </section>
  );
};
