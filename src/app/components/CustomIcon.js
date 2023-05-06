"use client";
import React from "react";
import { MdCall } from "react-icons/md";
import styles from "./callnow.module.css";

export const CustomIcon = () => {
  return (
    <div>
      <a href="tel:+4733378901" className="link_style">
        <button className={styles.send_button} onClick={() => {}}>
          <i style={{ marginRight: 7 }}>
            <MdCall />
          </i>
          Call now
        </button>
      </a>
    </div>
  );
};
