import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import GoogleMap from "./GoogleMap/GoogleMap";
import Footnote from "./Footnote/Footnote";

const Footer = () => {
  return (
    <>
      <ContactInfo/>
      <ContactForm/>
      <GoogleMap/>
      <Footnote/>
    </>


  );
};

export default Footer;
