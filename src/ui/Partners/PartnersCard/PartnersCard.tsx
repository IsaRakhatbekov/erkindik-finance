import Image from "next/image";
import styles from "./PartnersCard.module.scss";
import { FC } from "react";
import { IPartnersCardImage } from "@/src/types/IPartnersCard";

interface IPartnersCard {
  image: IPartnersCardImage;
}

const PartnersCard: FC<IPartnersCard> = ({ image }) => {
  const imageUrl = `${process.env.API_URL}${
    image?.formats?.medium?.url || image?.url
  }`;
  return (
    <li className={styles.imgWrapper}>
      <div className={styles.image}>
        <Image
          src={imageUrl}
          alt="partner logo"
          width={image.width}
          height={image.height}
        />
      </div>
    </li>
  );
};

export default PartnersCard;
