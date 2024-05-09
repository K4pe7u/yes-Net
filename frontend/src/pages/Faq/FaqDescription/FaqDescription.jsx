import React from 'react';
import css from './FaqDescription.module.css';
import data from './dataDescription.json';

const FaqDescription = () => {
  return (
    <>
      <div className={css.wrapper}>
        {data.map((item) => (
          <span className={css.item}>{item.description}</span>
        ))}
      </div>
    </>
  );
};

export default FaqDescription;
