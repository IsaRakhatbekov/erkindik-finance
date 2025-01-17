import Image from "next/image";
import styles from "./PartnersCard.module.scss";
import { FC } from "react";

interface IPartnersCard {
  image: string;
}

const PartnersCard: FC<IPartnersCard> = ({ image }) => {
  return (
    <li className={styles.imgWrapper}>
      <Image src={image} alt="" width={200} height={200} />
    </li>
  );
};

export default PartnersCard;
