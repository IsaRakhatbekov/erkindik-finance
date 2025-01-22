import Image from "next/image";
import styles from "./ServicesComponent.module.scss";
import Services1 from "@/public/images/moneySvg.svg";
import Services2 from "@/public/images/plusSvg.svg";
import Services3 from "@/public/images/wallet.svg";
import Services4 from "@/public/images/handAndCoinsSvg.svg";

export const ServicesComponent = () => {
  return (
    <section className={styles.services} id="service">
      <div className={`${styles.servicesContainer} container`}>
        <h2 className={`${styles.title} def-title`}>Услуги</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services1} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Покупка/Продажа</h4>
            <p className={styles.text}>
              Покупка и продажа финансовых инструментов — это процессы, которые
              осуществляются для передачи прав на активы между продавцом и
              покупателем. Эти операции происходят на финансовых рынках и могут
              быть связаны с различными видами инструментов, такими как акции,
              облигации, деривативы, валюты, криптовалюты и другие активы
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services2} alt="" />
            </div>
            <h4 className={styles.innerTitle}>
              Перевод финансовых инструментов
            </h4>
            <p className={styles.text}>
              Перевод финансовых инструментов — это процесс передачи прав
              собственности на финансовые активы от одного лица (или
              организации) к другому. В отличие от конвертации валют, перевод
              финансовых инструментов может охватывать более широкий спектр
              операций, включая перевод акций, облигаций, деривативов, других
              ценных бумаг, а также денежных средств, которые выражаются в этих
              инструментах.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services3} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Конвертация денежных средств </h4>
            <p className={styles.text}>
              Конвертация денежных средств — это процесс обмена одной валюты на
              другую. Этот процесс может происходить как на рынке валют, так и в
              рамках различных финансовых услуг. Конвертация может быть
              необходима для проведения международных расчетов, поездок за
              границу, инвестиций или ведения бизнеса в различных странах.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image src={Services4} alt="" />
            </div>
            <h4 className={styles.innerTitle}>Операция Брокера</h4>
            <p className={styles.text}>
              Операции брокера — это финансовые и торговые действия, которые
              брокер выполняет от имени клиента. Брокер действует как посредник
              между покупателями и продавцами финансовых инструментов (акции,
              облигации, деривативы, валюты и другие активы). Он предоставляет
              своим клиентам доступ к рынкам и помогает им выполнять различные
              финансовые операции. Брокеры могут работать как с розничными, так
              и с институциональными клиентами.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
