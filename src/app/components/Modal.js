import React from "react";

import styles from "./modal.module.css";

const Modal = ({ visible, setVisible }) => {
  return (
    <div
      id="myModal"
      className={styles.modal}
      style={!visible ? { display: "none" } : {}}
      onClick={(e) => {
        setVisible(false);
      }}
    >
      <div className={styles.modal_content}>
        <span
          onClick={(event) => {
            setVisible(false);
          }}
          className={styles.close}
        >
          &times;
        </span>
        <p>Your Request has been Sent Successfully!</p>
      </div>
    </div>
  );
};

export default Modal;
