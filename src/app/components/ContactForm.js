"use client";
import React, { useEffect, useState } from "react";
import styles from "./contactForm.module.css";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
// import Loader from "./Loader";

// import { Modal } from "./Modal";
const Modal = dynamic(() => import("./Modal"), { ssr: false });
const Loader = dynamic(() => import("./Loader"));

const ContactForm = () => {
  const [text, setText] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setText({ ...text, [name]: value });
  };
  const sendEmail = async () => {
    emailjs
      .send(
        "service_fefud4e",
        "template_iz52kxj",
        {
          ...text,
          name: text.fullName,
          email: "shivam9aug1996@gmail.com",
          customerEmail: text.email,
        },
        "G7_7HpLz_lyjYgbDV"
      )
      .then(() => {
        setText({ fullName: "", email: "", mobileNumber: "", message: "" });
        setModalVisible(true);
        setMessageSent(false);
      })
      .catch(() => {});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    sendEmail();
    //console.log(text);
  };
  return (
    <div className={styles.container}>
      <Modal visible={modalVisible} setVisible={setModalVisible} />
      <div style={{ display: "flex" }}>
        <h1>Request a&nbsp;</h1>
        <h1 style={{ color: "white" }}>call back</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <label htmlFor="fullName">
              <input
                required
                type={"text"}
                name="fullName"
                placeholder="Full Name"
                value={text.fullName}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label htmlFor="email">
              <input
                size="30"
                required
                type={"email"}
                name="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                value={text.email}
              />
            </label>
            <label htmlFor="mobileNumber">
              <input
                required
                type={"number"}
                name="mobileNumber"
                placeholder="Mobile Number"
                onChange={(e) => handleChange(e)}
                value={text.mobileNumber}
              />
            </label>
          </div>

          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows={4}
            cols={30}
            onChange={(e) => handleChange(e)}
            value={text.message}
          />
        </div>
        <div
          style={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <button
            disabled={messageSent}
            type="submit"
            className={styles.send_button}
            //   onClick={(e) => handleSubmit(e)}
          >
            {messageSent ? <Loader /> : `Send Message`}
          </button>
        </div>
      </form>
      {/* {messageSent && (
        <h3 style={{ color: "white" }}>
          Your Request has been Sent Successfully!
        </h3>
      )} */}
    </div>
  );
};

export default ContactForm;
