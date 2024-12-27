import Image from "next/image";
import styles from "./Partners.module.scss";
import swan from "@/public/images/partners/swar.png";
import nodal from "@/public/images/partners/nodal.png";
import june from "@/public/images/partners/june.png";
import moka from "@/public/images/partners/moka.png";
import dopt from "@/public/images/partners/dopt.png";
import figures from "@/public/images/partners/figures.png";
import fabriq from "@/public/images/partners/fabriq.png";
import multis from "@/public/images/partners/multis.png";
import contrast from "@/public/images/partners/contrast.png";
import dreem from "@/public/images/partners/dreem.png";
import lazy from "@/public/images/partners/lazy.png";
import founders from "@/public/images/partners/founders.png";

export const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={`${styles.partnersContainer} container`}>
        <h2 className={`${styles.partnersTitle} def-title`}>Наши партнеры</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={swan} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={nodal} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={june} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={moka} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={dopt} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={figures} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={fabriq} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={multis} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={contrast} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={dreem} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={lazy} alt="" />
          </li>
          <li className={styles.item}>
            <Image src={founders} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};
