import React, { useState } from "react";
import IndividualModal from "./Modals/Individual/Individual";
import BusinessModal from "./Modals/Business/Business";
import css from "./Mainset.module.css";

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
        <h1 className={css.solution}>yesNET</h1>
        <h2 className={css.secondarySolution}>Podłącz się do świata!</h2>
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
  );
};

export default Mainset;
