import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image src="/driver-6.png" alt="website logo" width={60} height={40} />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
