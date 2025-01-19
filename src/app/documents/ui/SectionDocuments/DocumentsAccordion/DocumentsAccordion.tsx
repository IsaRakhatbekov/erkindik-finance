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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#006eff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M24.707,8.793l-6.5,-6.5c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293h-10.5c-1.105,0 -2,0.895 -2,2v22c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-16.5c0,-0.265 -0.105,-0.519 -0.293,-0.707zM18,21h-8c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h8c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM20,17h-10c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h10c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM18,10c-0.552,0 -1,-0.448 -1,-1v-5.096l6.096,6.096z"></path>
                  </g>
                </g>
              </svg>
              {file?.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DocumentsAccordion;
