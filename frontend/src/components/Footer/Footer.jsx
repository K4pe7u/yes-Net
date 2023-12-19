import React from "react";
import css from "./Footer.module.css";
import Contact from "./Contact/Contact";
import GoogleMap from "./GoogleMap/GoogleMap";
import Footnote from "./Footnote/Footnote";

const Footer = () => {
  return (
    <div>
      <div className={css.contactFooter}>
        <Contact />
      </div>
      <div className={css.googleMapFooter}>
        <GoogleMap />
      </div>
      <div className={css.footnoteFooter}>
        <Footnote />
      </div>
    </div>
  );
};

export default Footer;
