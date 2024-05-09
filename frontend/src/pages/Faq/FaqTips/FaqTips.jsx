import React, { useState } from "react";
import css from "./FaqTips.module.css";
import dataTips from "./dataTips.json";

const FaqTips = () => {
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
        <div className={css.question}>
          Czy Twój internet działa nie wystarczająco do twoich potrzeb? Sprawdź
          zastosować kilka porad:
        </div>
        <div className={css.accordion}>
          {dataTips.map((item, index) => (
            <div key={index} className={css.item}>
              <div className={css.title} onClick={() => toggle(index)}>
                <h2>{item.step}</h2>
                <span>{selected === index ? "-" : "+"}</span>
              </div>
              {item.tip && (
                <div
                  className={`${css.content} ${
                    selected === index ? css.show : ""
                  }`}
                >
                  {item.tip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqTips;
