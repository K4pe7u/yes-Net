import React, { useState } from 'react';
import css from './FaqContractsAndPayments.module.css';
import data from './dataContractsAndPayments.json';

const FaqContractsAndPayments = () => {
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
        <p className={css.question}>
          Tu znajdziesz najczęściej zadawane pytania i odpowiedzi na nie,
          dotyczące umów i płatności w yesNET.
        </p>
        <div className={css.accordion}>
          {data.map((item, index) => (
            <div key={index} className={css.item}>
              <div className={css.title} onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              {item.answer && (
                <div
                  className={`${css.content} ${
                    selected === index ? css.show : ''
                  }`}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqContractsAndPayments;
