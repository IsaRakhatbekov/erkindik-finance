import Image from "next/image";
import styles from "./Partners.module.scss";
import PartnersCard from "./PartnersCard/PartnersCard";
import { IPartnersCardApiResponse } from "@/src/types/IPartnersCard";

export const Partners = async () => {
  let data: IPartnersCardApiResponse["data"] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partners?populate=*`);

    if (!res.ok) {
      throw new Error(`Failed to fetch partners: ${res.statusText}`);
    }

    const response: IPartnersCardApiResponse = await res.json();
    data = response.data;
  } catch (error) {
    console.error("Error fetching partners:", error);
    data = [];
  }

  return (
    <section className={styles.partners}>
      <div className={`${styles.partnersContainer} container`}>
        <h2 className={`${styles.partnersTitle} def-title`}>Наши партнеры</h2>
        <ul className={styles.list}>
          {data?.map((partnersItem) => {
            const { id, image } = partnersItem;

            return <PartnersCard key={id} image={image} />;
          })}
        </ul>
      </div>
    </section>
  );
};
