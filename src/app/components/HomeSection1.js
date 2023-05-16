import Image from "next/image";
import React from "react";
import styles from "./homeSection.module.css";
import { CustomIcon } from "./CustomIcon";
export const HomeSection1 = () => {
  return (
    <div className={styles.homeSection1}>
      <div className={styles.title}>
        <h1>Hire professional car drivers for local and outstation drives. </h1>
        <CustomIcon />
      </div>
      <Image
        priority={true}
        alt="driver holding the steering wheel"
        className={styles.homeSection1_image}
        src={"/driver-4.jpeg"}
        width={200}
        height={300}
        placeholder={"empty"}
      />
    </div>
  );
};
