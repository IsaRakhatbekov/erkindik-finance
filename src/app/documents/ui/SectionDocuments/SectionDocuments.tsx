import { IDocumentsApiResponse } from "@/src/types/IDocuments";
import DocumentsAccordion from "./DocumentsAccordion/DocumentsAccordion";
import styles from "./SectionDocuments.module.scss";

export const SectionDocuments = async () => {
  let data: IDocumentsApiResponse["data"] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/docs?populate=*`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.statusText}`);
    }

    const response: IDocumentsApiResponse = await res.json();
    data = response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    data = [];
  }
  return (
    <section className={styles.documents}>
      <div className={`${styles.documentsContainer} container`}>
        <h2 className={`${styles.documentsTitle} def-title`}>
          Документы и ссылки
        </h2>

        <ul className={styles.accordionWrapper}>
          {data?.map((documentBlock) => (
            <DocumentsAccordion
              key={documentBlock?.id}
              accordionTitle={documentBlock?.accordionTitle}
              accordionContent={documentBlock?.accordionContent}
              files={documentBlock?.files}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
