import React, { useState, useRef } from 'react';
import css from './FaqInternetAndTV.module.css';
import data from './dataFaqInternetAndTV.json';

const FaqInternetAndTV = () => {
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
          Przejrzyj nasze wskazówki i odpowiedzi na najczęstsze pytania związane
          z powyzszym zagadnieniem. Odpal swoją ciekawość!
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
                <h2>{item.question}</h2>
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
              <a
                href="https://avios.pl/pakiety/azarthd2020.html"
                className={css.downloads_link}
              >
                pakiet Azart HD
              </a>
            </li>
            <li>
              <a
                href="https://avios.pl/pakiety/luzhd2020.html"
                className={css.downloads_link}
              >
                pakiet Luz HD
              </a>
            </li>
            <li>
              <a
                href="https://avios.pl/pakiety/komfort+hd2020.html"
                className={css.downloads_link}
              >
                pakiet Komfort+ HD
              </a>
            </li>
            <li>
              <a
                href="https://avios.pl/pakiety/prestizhd2020.html"
                className={css.downloads_link}
              >
                pakiet Prestiż HD
              </a>
            </li>
            <li>
              <a
                href="https://avios.pl/pakiety/maxhd2020.html"
                className={css.downloads_link}
              >
                pakiet Max HD
              </a>
            </li>
            <li>
              <a
                href="https://avios.pl/pakiety/lista_kanalow.html"
                className={css.downloads_link}
              >
                wszystkie kanały
              </a>
            </li>
            <li>
              <a
                href="https://avios.pl/pakiety/dodatkowe.html"
                className={css.downloads_link}
              >
                pakiety dodatkowe
              </a>
            </li>
          </ul>
        </div>
      </div>
      <iframe
        className={css.downloads_avios}
        src="https://avios.pl/druk/avios-klasyczny.pdf"
        title="Dokument PDF: Avios Klasyczny"
      >
        Twój przeglądarka nie obsługuje elementu iframe.
        <a href="https://avios.pl/druk/avios-klasyczny.pdf">
          Kliknij tutaj, aby zobaczyć dokument
        </a>
        .
      </iframe>
    </>
  );
};

export default FaqInternetAndTV;
