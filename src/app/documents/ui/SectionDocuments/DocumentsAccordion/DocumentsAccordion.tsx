"use client";
import { FC, useState } from "react";
import styles from "./DocumentsAccordion.module.scss";

interface IDocumentText {
  title: string;
  file: string;
}

const DocumentsAccordion: FC<IDocumentText> = ({ title, file }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
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
  );
};

export default DocumentsAccordion;
