import { IDocumentsApiResponse } from "@/src/types/IDocuments";
import DocumentsAccordion from "./DocumentsAccordion/DocumentsAccordion";
import styles from "./SectionDocuments.module.scss";

export const SectionDocuments = async () => {
  let data: IDocumentsApiResponse["data"] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/docs?populate=*`);

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
              title={documentBlock?.title}
              files={documentBlock?.file}
            />
          ))}
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
