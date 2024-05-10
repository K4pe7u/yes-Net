import React from 'react';
import css from './Faq.module.css';
import FaqDescription from './FaqDescription/FaqDescription';
import FaqNavigation from './FaqNavigation/FaqNavigation';
import FaqTips from './FaqTips/FaqTips';
import FootNote from '../../components/Footer/Footnote/Footnote';

const Faq = () => {
  return (
    <>
      <div className={css.gradientBackground}></div>
      <div className={css.wrapper}>
        <h2 className={css.title}>FAQ</h2>
        <FaqDescription />
        <FaqNavigation />
      </div>
      <div>
        <FootNote />
      </div>
    </>
  );
};

export default Faq;
