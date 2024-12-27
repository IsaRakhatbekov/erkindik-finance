import styles from "./Map.module.scss";
export const Map = () => {
  return (
    <section className={styles.map}>
      <div className={`${styles.mapContainer} container`}>
        <h2 className={`${styles.mapTitle} def-title`}>Мы на карте</h2>
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8977.92222675441!2d74.60794681749904!3d42.87495598738333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb91e2d4ad4f9%3A0x6a6ef20aabeb8d3e!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAgItCQ0YHRi9C7LdCi0LDRiCIgQURWRU5DRWFjYWRlbXk!5e0!3m2!1sru!2skg!4v1735234099829!5m2!1sru!2skg"
            style={{ border: 0 }} // Передаем объект, а не строку
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
