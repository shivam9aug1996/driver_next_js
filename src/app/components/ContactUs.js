import React from "react";
import { MdCall } from "react-icons/md";
import styles from "./contactus.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <i style={{ fontSize: 25 }}>
        <MdCall />
      </i>
      <h2>Phone Number</h2>
      <h3>Feel free to Call us</h3>
      <a href="tel:+919634396572" className="link_style">
        <h4>+91 9634396572</h4>
      </a>
    </div>
  );
};

export default ContactUs;
