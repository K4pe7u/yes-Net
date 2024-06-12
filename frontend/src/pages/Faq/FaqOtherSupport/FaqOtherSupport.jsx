import React, { useState, useRef } from 'react';
import css from './FaqOtherSupport.module.css';
import data from './dataFaqOtherSupport.json';

const FaqOtherSupport = () => {
  const [selected, setSelected] = useState(null);
  const listOfTips = useRef(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  const clear = () => {
    const list = listOfTips.current.querySelectorAll(`[data-content="true"]`);
    list.forEach((item) => {
      if (item.clientHeight) {
        item.style.height = 0;
      }
    });
  };

  const grow = (e) => {
    e.stopPropagation();
    clear();
    const content = e.currentTarget.querySelector(`[data-content="true"]`);
    const txt = content.querySelector(`p`);
    if (content.clientHeight) {
      content.style.height = 0;
    } else {
      content.style.height = txt.clientHeight + 'px';
    }
  };

  return (
    <>
      <div className={css.wrapper}>
        <p className={css.question}>
          Dodatkowe wskazówki, porady, odpowiedzi. Bądźmy kreatywni i oryginalni
          we wspólnym działaniu!
        </p>
        <div className={css.accordion} ref={listOfTips}>
          {data.map((item, index) => (
            <div
              key={index}
              className={css.item}
              onClick={(event) => {
                toggle(index);
                grow(event);
              }}
            >
              <div className={css.title}>
                <h2 className={css.title_question}>{item.question}</h2>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              {item.answer && (
                <div className={css.content} data-content="true">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={css.downloads}>
          <h3>Przydatne pliki do pobrania:</h3>
          <ul className={css.downloads_list}>
            <li>
              <span>Cennik Innych Usług - </span>
              <a href="files/ggg.pdf" download className={css.downloads_link}>
                Pobierz Plik PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FaqOtherSupport;
