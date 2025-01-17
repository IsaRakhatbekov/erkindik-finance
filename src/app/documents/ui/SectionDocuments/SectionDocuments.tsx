import DocumentsAccordion from "./DocumentsAccordion/DocumentsAccordion";
import styles from "./SectionDocuments.module.scss";

export const SectionDocuments = () => {
  return (
    <section className={styles.documents}>
      <div className={`${styles.documentsContainer} container`}>
        <h2 className={`${styles.documentsTitle} def-title`}>
          Документы и ссылки
        </h2>

        <ul className={styles.accordionWrapper}>
          <DocumentsAccordion title="lorem ipsum" file="lorem ipsum" />
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
