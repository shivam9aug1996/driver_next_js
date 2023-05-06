import Image from "next/image";
import React from "react";
import styles from "./aboutSection.module.css";

const AboutSection1 = () => {
  return (
    <>
      <div className={styles.homeSection1}>
        <div style={{ display: "flex", flexDirection: "column", flex: 0.4 }}>
          <h2 className={styles.about_title}>
            Get to know about <em>us</em>
          </h2>
          <p>
            {`Whenever you need drivers services, we're here to help 24x7. Using
          your vehicle, our trained and experienced drivers will pick you up and
          take you to your desired destination safely and comfortably. Our team
          ensures complete safety and protection for your vehicle at all times.
          You will be dropped off at your desired destination on time by our
          team of `}
            <em>professional drivers.</em>
          </p>
        </div>
        <Image
          className={styles.homeSection1_image}
          src={"/driver-7.webp"}
          width={200}
          height={300}
        />
      </div>
      <div className={styles.homeSection1}>
        <Image
          className={styles.homeSection1_image}
          src={"/driver-8.jpg"}
          width={200}
          height={300}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 0.4 }}>
          <p>
            {`Our drivers are all vaccinated and
          follow Covid's safety measures. You can choose between a driver on
          call at your place, an outstation driver, a driver on a monthly basis,
          city driving, corporate drops, and late-night drops. Hence, book our
          services now without any hesitation and enjoy the ride in the back
          seat of your car.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection1;
