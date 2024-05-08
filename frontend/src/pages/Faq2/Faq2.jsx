import React from 'react';
import css from './Faq2.module.css';
import data from './data.json';
import { useState } from 'react';

const Faq2 = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.accordion}>
          {data.map((item, index) => (
            <div key={index} className={css.item}>
              <div className={css.title} onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>{selected === index ? '-' : '+'}</span>
              </div>

              <div
                className={`${css.content}${
                  selected === index ? css.show : ''
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq2;
