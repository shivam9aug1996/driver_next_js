import React from "react";
import { MdCall } from "react-icons/md";
import styles from "./callnow.module.css";

export const CustomIcon = () => {
  return (
    <div style={{ maxWidth: "fit-content" }}>
      <a href="tel:+919634396572" className="link_style">
        <button className={styles.send_button}>
          <i style={{ marginRight: 7 }}>
            <MdCall />
          </i>
          Call now
        </button>
      </a>
    </div>
  );
};
