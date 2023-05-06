"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li>
          <Link
            className={
              pathname == "/"
                ? `link_style ${styles.active_link}`
                : "link_style"
            }
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/about"
                ? `link_style ${styles.active_link}`
                : "link_style"
            }
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/contact-us"
                ? `link_style ${styles.active_link}`
                : "link_style"
            }
            href={"/contact-us"}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
