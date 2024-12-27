"use client";
import { useState } from "react";
import styles from "./SectionDocuments.module.scss";
export const SectionDocuments = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.documents}>
      <div className={`${styles.documentsContainer} container`}>
        <h2 className={`${styles.documentsTitle} def-title`}>
          Документы и ссылки
        </h2>

        <ul className={styles.accordionWrapper}>
          <li className={styles.accordion}>
            <button
              onClick={() => handleClickAccordion(0)}
              className={`${styles.accordionBtn} ${
                activeIndex === 0 ? styles.accordionBtnActive : ""
              }`}
            >
              Документы компании и Проверка лицензий/свидетельств
            </button>
            <div
              className={`${styles.accordionBody} ${
                activeIndex === 0 ? styles.accordionActive : ""
              }`}
            >
              textextextetxetxetxetet
            </div>
          </li>
          <li className={styles.accordion}>
            <button
              onClick={() => handleClickAccordion(1)}
              className={`${styles.accordionBtn} ${
                activeIndex === 1 ? styles.accordionBtnActive : ""
              }`}
            >
              Регламент, ПФТД-ЛПД, Тарифы и др.
            </button>
            <div
              className={`${styles.accordionBody} ${
                activeIndex === 1 ? styles.accordionActive : ""
              }`}
            >
              textextextetxetxetxetet
            </div>
          </li>
          <li className={styles.accordion}>
            <button
              onClick={() => handleClickAccordion(2)}
              className={`${styles.accordionBtn} ${
                activeIndex === 2 ? styles.accordionBtnActive : ""
              }`}
            >
              Как стать клиентом
            </button>
            <div
              className={`${styles.accordionBody} ${
                activeIndex === 2 ? styles.accordionActive : ""
              }`}
            >
              textextextetxetxetxetet
            </div>
          </li>
          <li className={styles.accordion}>
            <button
              onClick={() => handleClickAccordion(3)}
              className={`${styles.accordionBtn} ${
                activeIndex === 3 ? styles.accordionBtnActive : ""
              }`}
            >
              Поручения
            </button>
            <div
              className={`${styles.accordionBody} ${
                activeIndex === 3 ? styles.accordionActive : ""
              }`}
            >
              textextextetxetxetxetet
            </div>
          </li>
          <li className={styles.accordion}>
            <button
              onClick={() => handleClickAccordion(4)}
              className={`${styles.accordionBtn} ${
                activeIndex === 4 ? styles.accordionBtnActive : ""
              }`}
            >
              Пополнение счета/ Реквизиты по ДС и ЦБ
            </button>
            <div
              className={`${styles.accordionBody} ${
                activeIndex === 4 ? styles.accordionActive : ""
              }`}
            >
              textextextetxetxetxetet
            </div>
          </li>
        </ul>

        <h2 className={`${styles.documentsTitle} def-title`}>
          Законодательство
        </h2>
        <div className={styles.law}>
          <p className={styles.lawText}>
            Положение о допуске ценных бумаг, выпущенных эмитентами других
            государств, к публичному предложению на территории Кыргызской
            Республики
          </p>
          <p className={styles.lawText}>
            Закон КР «О противодействии финансированию террористической
            деятельности и легализации (отмыванию) преступных доходов»
          </p>
        </div>
      </div>
    </section>
  );
};
