import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import styles from "./contactus.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container1}>
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
      <div className={styles.container}>
        <i style={{ fontSize: 25 }}>
          <MdEmail />
        </i>
        <h2>Email</h2>
        <h3>For further details mail us</h3>
        <a href="mailto:care@driveronrent.in" className="link_style">
          <h4>care@driveronrent.in</h4>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
