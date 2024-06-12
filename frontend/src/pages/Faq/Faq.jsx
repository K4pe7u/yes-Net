import React from 'react';
import css from './Faq.module.css';
// import FaqDescription from "./FaqDescription/FaqDescription";
import FaqNavigation from './FaqNavigation/FaqNavigation';
import FootNote from '../../components/Footer/Footnote/Footnote';

const Faq = () => {
  return (
    <>
      <div className={css.gradientBackground}></div>
      <div className={css.wrapper}>
        <h2 className={css.title}>FAQ</h2>

        <h3 className={css.description}>Potrzebne Ci wsparcie?</h3>
        <h3 className={css.description}>
          Rozwiej nurtujące pytania lub skorzystaj z naszych wskazówek.
        </h3>
        <FaqNavigation />
      </div>
      <div>
        <FootNote />
      </div>
    </>
  );
};

export default Faq;
