import React, { useState } from "react";
import css from "./FaqInternetAndTV.module.css";
import data from "./dataFaqInternetAndTV.json";

const FaqInternetAndTV = () => {
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
          Tu znajdziesz najczęściej zadawane pytania i odpowiedzi dotyczące
          internetu i telewizji AVIOS w yesNET.
        </p>
        <div className={css.accordion}>
          {data.map((item, index) => (
            <div key={index} className={css.item}>
              <div className={css.title} onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>{selected === index ? "-" : "+"}</span>
              </div>
              {item.answer && (
                <div
                  className={`${css.content} ${
                    selected === index ? css.show : ""
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

export default FaqInternetAndTV;
