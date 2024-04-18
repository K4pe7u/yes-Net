import React from "react";
import Contact from "./Contact/Contact";
import GoogleMap from "./GoogleMap/GoogleMap";
import Footnote from "./Footnote/Footnote";

const Footer = () => {
  return (
    <div>
      <div>
        <Contact/>
      </div>
      <div >
        <GoogleMap/>
      </div>
      <div>
        <Footnote/>
      </div>
    </div>
  );
};

export default Footer;
