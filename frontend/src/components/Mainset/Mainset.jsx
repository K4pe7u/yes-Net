import React, { useState } from "react";
import IndividualModal from "./Modals/Individual/Individual";
import BusinessModal from "./Modals/Business/Business";
import css from "./Mainset.module.css";
import mobilelogo from "../../image/logo320x460.png";
import tabletlogo from "../../image/logo768x1104.png";
import desktoplogo from "../../image/logo1440x2070.png";

const Mainset = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalType) => {
    setCurrentModal(modalType);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <div className={css.sellContainer}>
      <div className={css.titleContainer}>
        <picture className={css.logoImage}>
          <source media="(min-width: 1280px)" srcSet={tabletlogo} />
          <img src={mobilelogo} alt="ggg" />
        </picture>
      </div>
      <div className={css.joinContainer}>
        <div className={css.solutionSecondary}>
          Skrój Pakiet Dla Swoich Potrzeb!
        </div>
        <div className={css.optionContainer}>
          <button
            onClick={() => openModal("individual")}
            type="button"
            className={css.individualOption}
          >
            <span className={css.highlight2}></span>
            <span className={css.buttonText2}>Rozwiązania indywidualne</span>
          </button>
          <button
            onClick={() => openModal("business")}
            type="button"
            className={css.companyOption}
          >
            <span className={css.highlight}></span>
            <span className={css.buttonText}>Rozwiązania dla firmy</span>
          </button>
        </div>

        {currentModal === "individual" && (
          <IndividualModal onClose={closeModal} />
        )}

        {currentModal === "business" && <BusinessModal onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Mainset;
