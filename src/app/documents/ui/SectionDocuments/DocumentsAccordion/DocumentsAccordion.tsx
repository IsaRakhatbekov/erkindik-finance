"use client";
import { FC, useState } from "react";
import styles from "./DocumentsAccordion.module.scss";
import { IDocumentFile } from "@/src/types/IDocuments";

interface IDocumentsAccordionProps {
  title: string;
  files: IDocumentFile[];
}

const DocumentsAccordion: FC<IDocumentsAccordionProps> = ({ title, files }) => {
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
        {title}
      </button>
      <ul
        className={`${styles.accordionBody} ${
          activeIndex === 0 ? styles.accordionActive : ""
        }`}
      >
        {files?.map((file) => (
          <li key={file.id} className={styles.accordionItem}>
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}${file?.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accordionLink}
            >
              {file?.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DocumentsAccordion;
