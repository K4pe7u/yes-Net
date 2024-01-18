import React, { useState } from "react";
import IndividualModal from "./Modals/Individual/Individual";
import BusinessModal from "./Modals/Business/Business";
import css from "./Mainset.module.css";
import logo from "../../image/logo.png";

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
        {/* <div className={css.yesContainer}>
          <h1 className={css.solution}>yes</h1>
        </div>
        <div className={css.netContainer}>
          <h1 className={css.solution}>NET</h1>
        </div> */}
        {/* <img
          src={logo}
          alt="ggg"
          width={1200}
          height={1200}
          className={css.logoImage}
        /> */}
      </div>
      <div className={css.joinContainer}>
        <div className={css.solutionSecondary}>Podłącz się do Świata!</div>
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
