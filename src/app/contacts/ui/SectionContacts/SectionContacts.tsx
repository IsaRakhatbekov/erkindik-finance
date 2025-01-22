"use client";
import { useState } from "react";
import styles from "./SectionContacts.module.scss";

export const SectionContacts = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, ""),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправленные данные:", formData);
    // Здесь можно добавить логику отправки данных на сервер
  };

  return (
    <section className={styles.contacts}>
      <div className={`${styles.contactsContainer} container`}>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="text"
                name="phone"
                placeholder="Ваш номер телефона"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              className={styles.textArea}
              name="comment"
              placeholder="Комментарий"
              value={formData.comment}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className={styles.formBtn}>
              Связаться
            </button>
          </form>
          <ul className={styles.right}>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="mailto:info@erkindikfinance.kg"
                target="_blank"
              >
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 40C17.2333 40 14.6333 39.475 12.2 38.425C9.76667 37.375 7.65 35.95 5.85 34.15C4.05 32.35 2.625 30.2333 1.575 27.8C0.525 25.3667 0 22.7667 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.625 12.2 1.575C14.6333 0.525 17.2333 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20V22.9C40 24.8667 39.325 26.5417 37.975 27.925C36.625 29.3083 34.9667 30 33 30C31.8333 30 30.7333 29.75 29.7 29.25C28.6667 28.75 27.8 28.0333 27.1 27.1C26.1333 28.0667 25.0417 28.7917 23.825 29.275C22.6083 29.7583 21.3333 30 20 30C17.2333 30 14.875 29.025 12.925 27.075C10.975 25.125 10 22.7667 10 20C10 17.2333 10.975 14.875 12.925 12.925C14.875 10.975 17.2333 10 20 10C22.7667 10 25.125 10.975 27.075 12.925C29.025 14.875 30 17.2333 30 20V22.9C30 23.7667 30.2833 24.5 30.85 25.1C31.4167 25.7 32.1333 26 33 26C33.8667 26 34.5833 25.7 35.15 25.1C35.7167 24.5 36 23.7667 36 22.9V20C36 15.5333 34.45 11.75 31.35 8.65C28.25 5.55 24.4667 4 20 4C15.5333 4 11.75 5.55 8.65 8.65C5.55 11.75 4 15.5333 4 20C4 24.4667 5.55 28.25 8.65 31.35C11.75 34.45 15.5333 36 20 36H30V40H20ZM20 26C21.6667 26 23.0833 25.4167 24.25 24.25C25.4167 23.0833 26 21.6667 26 20C26 18.3333 25.4167 16.9167 24.25 15.75C23.0833 14.5833 21.6667 14 20 14C18.3333 14 16.9167 14.5833 15.75 15.75C14.5833 16.9167 14 18.3333 14 20C14 21.6667 14.5833 23.0833 15.75 24.25C16.9167 25.4167 18.3333 26 20 26Z"
                      fill="white"
                    />
                  </svg>
                </span>
                info@erkindikfinance.kg
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="tel:+996708148878">
                <span>
                  <svg
                    width="37"
                    height="42"
                    viewBox="0 0 37 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 41.0834V37.25H32.7917V35.3334H24.625V20H32.7917V18.0834C32.7917 14.3778 31.3965 11.2153 28.6063 8.59587C25.816 5.97643 22.4472 4.66671 18.5 4.66671C14.5528 4.66671 11.184 5.97643 8.39375 8.59587C5.60347 11.2153 4.20833 14.3778 4.20833 18.0834V20H12.375V35.3334H4.20833C3.08542 35.3334 2.12413 34.958 1.32448 34.2073C0.524826 33.4566 0.125 32.5542 0.125 31.5V18.0834C0.125 15.7195 0.609896 13.4914 1.57969 11.399C2.54948 9.30664 3.86806 7.47782 5.53542 5.91254C7.20278 4.34726 9.15087 3.10942 11.3797 2.199C13.6085 1.28858 15.9819 0.833374 18.5 0.833374C21.0181 0.833374 23.3915 1.28858 25.6203 2.199C27.8491 3.10942 29.7972 4.34726 31.4646 5.91254C33.1319 7.47782 34.4505 9.30664 35.4203 11.399C36.3901 13.4914 36.875 15.7195 36.875 18.0834V37.25C36.875 38.3042 36.4752 39.2066 35.6755 39.9573C34.8759 40.708 33.9146 41.0834 32.7917 41.0834H18.5ZM4.20833 31.5H8.29167V23.8334H4.20833V31.5ZM28.7083 31.5H32.7917V23.8334H28.7083V31.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                +996 70814 88 78
              </a>
            </li>
            <li>
              <p className={styles.text}>
                <span>Юридический адрес: </span>
                720021, Кыргызская Республика, г.Бишкек, ул. Ибраимова 115\1, БЦ
                "Асыл-Таш" 4-этаж
              </p>
            </li>
            <li>
              <p className={styles.text}>
                <span>Фактический адрес: </span>
                720021, Кыргызская Республика, г.Бишкек, ул. Ибраимова 115\1, БЦ
                "Асыл-Таш" 4-этаж
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
