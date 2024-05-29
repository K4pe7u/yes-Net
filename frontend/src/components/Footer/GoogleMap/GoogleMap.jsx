import React from "react";
import css from "./GoogleMap.module.css";

const GoogleMap = () => {
  return (
    <div className={css.googleMap}>
      <h2 className={css.googleMap_title}>
        Lokalizacja punktów obsługi YesNet
      </h2>
      <iframe
        title="Google Map - Lokalizacja biura w Wronkach"
        className={css.mapIframe}
        src="https://www.google.com/maps/d/u/0/embed?mid=1GmaU2EqRUKf-yCJob2NYPUYUc36CiSc&ehbc=2E312F&noprof=1"
        style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex="0"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
