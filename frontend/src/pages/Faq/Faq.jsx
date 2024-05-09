import React from 'react';
import css from './Faq.module.css';
import FaqDescription from './FaqDescription/FaqDescription';
import FaqNavigation from './FaqNavigation/FaqNavigation';

const Faq = () => {
  return (
    <>
      <div className={css.wrapper}>
        <h2 className={css.title}>FAQ</h2>
        <FaqDescription />
        <FaqNavigation />
      </div>
    </>
  );
};

export default Faq;
