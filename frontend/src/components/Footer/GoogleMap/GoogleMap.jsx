import React from "react";
import css from "./GoogleMap.module.css";

const GoogleMap = () => {
  return (
    <div className={css.googleMap}>
      <h2>Lokalizacja biura w Wronkach</h2>
      <iframe
        title="Google Map - Lokalizacja biura w Wronkach"
        className={css.mapIframe}
        src="https://www.google.com/maps/embed/v1/place?q=UL.%20Towarowa%201%2C%2064-510%20Wronki&key=TWÓJ_KLUCZ_API"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
