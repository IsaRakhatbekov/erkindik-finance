import Image from "next/image";
import styles from "./News.module.scss";
import news1 from "@/public/images/news1.png";
import news2 from "@/public/images/news2.png";
import news3 from "@/public/images/news3.png";

export const News = () => {
  return (
    <section className={styles.news}>
      <div className={`${styles.newsContainer} container`}>
        <h2 className={`${styles.title} def-title`}>Новости</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={news1} alt="" />
            </div>
            <div className={styles.inner}>
              <h4 className={styles.innerTitle}>
                Инвестиционный фонд ABC Capital увеличил доходность портфелей на
                12% за квартал
              </h4>
              <p className={styles.text}>
                ABC Capital, известный своими инновационными подходами в
                управлении активами, отчитался о росте доходности на 12% за
                третий квартал 2024 года. Руководство фонда связывает успех с
                эффективной диверсификацией активов и внедрением
                алгоритмического анализа для управления рисками
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={news2} alt="" />
            </div>
            <div className={styles.inner}>
              <h4 className={styles.innerTitle}>
                O увеличила прибыль на 20% благодаря развитию цифровых продуктов
              </h4>
              <p className={styles.text}>
                Финансовая компания O опубликовала финансовые результаты за
                третий квартал 2024 года. Прибыль выросла на 20% по сравнению с
                аналогичным периодом прошлого года. Рост обеспечен внедрением
                новых цифровых решений, включая мобильное приложение для
                управления финансами и платформу
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={news3} alt="" />
            </div>
            <div className={styles.inner}>
              <h4 className={styles.innerTitle}>
                Финансовая компания O открывает международное направление
              </h4>
              <p className={styles.text}>
                Компания O объявила о выходе на международные рынки. В рамках
                новой стратегии развития офисы компании появятся в Лондоне,
                Сингапуре и Дубае, что позволит укрепить её позиции в сфере
                управления активами и корпоративного кредитования.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
