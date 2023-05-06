import Image from "next/image";
import React from "react";
import styles from "./homeSection.module.css";
import { MdCall } from "react-icons/md";
import { CustomIcon } from "./CustomIcon";
export const HomeSection1 = () => {
  return (
    <div className={styles.homeSection1}>
      <div className={styles.title}>
        <h1>Hire professional car drivers for local and outstation drives. </h1>
        <CustomIcon />
      </div>
      <Image
        className={styles.homeSection1_image}
        src={"/driver-4.jpeg"}
        width={200}
        height={300}
      />
    </div>
  );
};
