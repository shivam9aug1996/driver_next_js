import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <Image src="/driver-6.png" width={60} height={40} />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
