import Image from "next/image";
import styles from "./Partners.module.scss";
import PartnersCard from "./PartnersCard/PartnersCard";
import { IPartnersCardApiResponse } from "@/src/types/IPartnersCard";

export const Partners = async () => {
  // const res = await fetch(`${process.env.API_URL}/api/partners?populate=*`);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch news");
  // }

  // const { data }: IPartnersCardApiResponse = await res.json();
  // console.log(data);

  return (
    <section className={styles.partners}>
      <div className={`${styles.partnersContainer} container`}>
        <h2 className={`${styles.partnersTitle} def-title`}>Наши партнеры</h2>
        <ul className={styles.list}>
          {/* {data?.map((partnersItem) => {
            const { id, image } = partnersItem;

            const imageUrl = `${process.env.API_URL}${
              image?.formats?.medium?.url || image?.url
            }`;

            return <PartnersCard key={id} image={imageUrl} />;
          })} */}
        </ul>
      </div>
    </section>
  );
};
