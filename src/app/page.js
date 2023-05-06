import Image from "next/image";
import React from "react";
import ContactForm from "./components/ContactForm";
import { HomeSection1 } from "./components/HomeSection1";

const Home = () => {
  return (
    <>
      <HomeSection1 />
      <ContactForm />
    </>
  );
};

export default Home;
