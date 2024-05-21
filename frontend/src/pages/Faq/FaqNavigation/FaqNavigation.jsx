import React, { useState } from "react";
import css from "./FaqNavigation.module.css";
import FaqTips from "../FaqTips/FaqTips";
import FaqInternetAndTV from "../FaqInternetAndTV/FaqInternetAndTV";
import FaqContractsAndPayments from "../FaqContractsAndPayments/FaqContractsAndPayments";
import FaqOtherSupport from "../FaqOtherSupport/FaqOtherSupport";

import technicalSupport from "../../../icons/technicalSupport.svg";
import internetAndTV from "../../../icons/internetAndTV.svg";
import contractsAndPayments from "../../../icons/contractsAndPayments.svg";
import otherSupport from "../../../icons/otherSupport.svg";

const FaqNavigation = () => {
  const [activeIn, setActiveIn] = useState(0);

  const sections = [
    { label: "Pomoc Techniczna", icon: technicalSupport },
    { label: "Internet i Telewizja", icon: internetAndTV },
    { label: "Umowy i Płatności", icon: contractsAndPayments },
    { label: "Inne Wsparcie", icon: otherSupport },
  ];

  const handleClick = (index) => {
    setActiveIn(index);
  };

  return (
    <>
      <div className={css.wrapper}>
        <h4 className={css.description}>Wybierz odpowiednią kategorię:</h4>
        <ul className={css.navigation}>
          {sections.map((section, index) => (
            <li
              key={index}
              style={{ pointerEvents: activeIn === index ? "none" : "auto" }}
              className={`${css.item} ${activeIn === index ? css.active : ""}`}
              onClick={() => handleClick(index)}
            >
              {section.icon && (
                <img
                  src={section.icon}
                  alt={section.label.toLowerCase()}
                  width={120}
                  height={120}
                />
              )}
              {section.label}
            </li>
          ))}
        </ul>
      </div>
      {activeIn === 0 && <FaqTips />}
      {activeIn === 1 && <FaqInternetAndTV />}
      {activeIn === 2 && <FaqContractsAndPayments />}
      {activeIn === 3 && <FaqOtherSupport />}
    </>
  );
};

export default FaqNavigation;
