import React from 'react';
import css from './FaqNavigation.module.css';

const FaqNavigation = () => {
  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.navigation}>
          <li className={css.item}>Pomoc Techniczna</li>
          <li className={css.item}>Płatności i Umowy</li>
          <li className={css.item}>Promocje</li>
          <li className={css.item}>Współpraca</li>
        </ul>
      </div>
    </>
  );
};

export default FaqNavigation;
