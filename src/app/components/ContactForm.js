"use client";
import React, { useEffect, useState } from "react";
import styles from "./contactForm.module.css";
import dynamic from "next/dynamic";
import Mailjet from "node-mailjet";

let Loader = null;
let Email = null;
let Modal = null;

const ContactForm = () => {
  const [text, setText] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setText({ ...text, [name]: value });
  };
  const sendEmail = async () => {
    if (navigator.onLine) {
      const mailjet = Mailjet.apiConnect(
        "daf3347b0837a5ae94fdd0dcfe2f897f",
        "fb81abf0bdb4541b46937a6a703d03a7",
        {
          config: {},
          options: {},
        }
      );
      const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "care@driveronrent.com",
              Name: "Mailjet Pilot",
            },
            To: [
              {
                Email: "passenger1@mailjet.com",
                Name: "passenger 1",
              },
            ],
            Subject: "Your email flight plan!",
            TextPart:
              "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            HTMLPart:
              '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
          },
        ],
      });

      request
        .then((result) => {
          console.log(result.body);
        })
        .catch((err) => {
          console.log(err.statusCode);
        });

      // Email.send({
      //   SecureToken: process.env.EMAIL_SECURE_TOKEN,
      //   To: "shivam9aug1996@gmail.com",
      //   From: "shivam9aug1996@gmail.com",
      //   Subject: `Hi Shivam`,
      //   Body: `A New Contact Request has submitted the following details
      //           Name: ${text.fullName}
      //           Email: ${text.email}
      //           Mobile Number: ${text.mobileNumber}
      //           Message: ${text.message}`,
      // })
      //   .then((message) => {
      //     Email.send({
      //       SecureToken: process.env.EMAIL_SECURE_TOKEN,
      //       To: `${text.email}`,
      //       From: "shivam9aug1996@gmail.com",
      //       Subject: `Hi ${text.fullName}`,
      //       Body: `Thank you for contacting us, we will get back to you as soon as possible.`,
      //     })
      //       .then((message) => {
      //         console.log(message);
      //         setText({
      //           fullName: "",
      //           email: "",
      //           mobileNumber: "",
      //           message: "",
      //         });
      //         setModalVisible(true);
      //         setMessageSent(false);
      //       })
      //       .catch(() => {
      //         setMessageSent(false);
      //       });
      //   })
      //   .catch(() => {
      //     setMessageSent(false);
      //   })
      //   .finally(() => {
      //     setMessageSent(false);
      //   });
    } else {
      setMessageSent(false);
    }

    // console.log(
    //   process.env.EMAIL_SERVICE_ID,
    //   process.env.EMAIL_TEMPLATE_ID,
    //   process.env.EMAIL_PUBLIC_KEY
    // );
    // const emailjs = (await import("@emailjs/browser")).default;
    // emailjs
    //   .send(
    //     process.env.EMAIL_SERVICE_ID,
    //     process.env.EMAIL_TEMPLATE_ID,
    //     {
    //       ...text,
    //       name: text.fullName,
    //       email: "shivam9aug1996@gmail.com",
    //       customerEmail: text.email,
    //     },
    //     process.env.EMAIL_PUBLIC_KEY,
    //   )
    //   .then(() => {
    //     setText({ fullName: "", email: "", mobileNumber: "", message: "" });
    //     setModalVisible(true);
    //     setMessageSent(false);
    //   })
    //   .catch(() => {});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    Loader = (await import("./Loader")).default;
    Email = (await import("./Email")).default;
    Modal = (await import("./Modal")).default;
    setMessageSent(true);
    sendEmail();
  };
  return (
    <div className={styles.container}>
      {modalVisible && (
        <Modal visible={modalVisible} setVisible={setModalVisible} />
      )}
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
          >
            {messageSent ? <Loader /> : `Send Message`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
