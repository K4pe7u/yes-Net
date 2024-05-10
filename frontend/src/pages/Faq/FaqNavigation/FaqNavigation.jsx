import React, { useState, useEffect } from 'react';
import css from './FaqNavigation.module.css';
import FaqTips from '../FaqTips/FaqTips';
import FaqQuestion from '../FaqQuestion/FaqQuestion';

const FaqNavigation = () => {
  const [activeIn, setActiveIn] = useState(null);

  const handleClick = (index) => {
    setActiveIn(index === activeIn ? null : index);
  };

  useEffect(() => {
    setActiveIn(0);
  }, []);

  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.navigation}>
          <li
            style={{ pointerEvents: activeIn === 0 ? 'none' : 'auto' }}
            className={`${css.item} ${activeIn === 0 ? css.active : ''}`}
            onClick={() => handleClick(0)}
          >
            Pomoc Techniczna
          </li>
          <li
            style={{ pointerEvents: activeIn === 1 ? 'none' : 'auto' }}
            className={`${css.item} ${activeIn === 1 ? css.active : ''}`}
            onClick={() => handleClick(1)}
          >
            Płatności i Umowy
          </li>
          <li
            style={{ pointerEvents: activeIn === 2 ? 'none' : 'auto' }}
            className={`${css.item} ${activeIn === 2 ? css.active : ''}`}
            onClick={() => handleClick(2)}
          >
            Promocje
          </li>
          <li
            style={{ pointerEvents: activeIn === 3 ? 'none' : 'auto' }}
            className={`${css.item} ${activeIn === 3 ? css.active : ''}`}
            onClick={() => handleClick(3)}
          >
            Współpraca
          </li>
        </ul>
      </div>
      {activeIn === 0 && <FaqTips />}
      {activeIn === 1 && <FaqQuestion />}
    </>
  );
};

export default FaqNavigation;
