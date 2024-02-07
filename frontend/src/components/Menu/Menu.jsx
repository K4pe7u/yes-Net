import React from "react";
import css from "./Menu.module.css";
import icon from "../../icons/icons.svg";

const Menu = ({ open, onClose }) => {
  return (
    <>
      {
        <>
          <div className={`${css.menu} ${open ? css.open : css.close}`}>
            <div className={css.menuHeader}>
              <svg
                className={`${css.arrow_right}`}
                width="36px"
                height="32px"
                fill="white"
                onClick={onClose}
              >
                <use href={`${icon}#arrow_right`}></use>
              </svg>
              <div className={css.companyInfo}>
                <div className={css.logo}>
                  <svg className={`${css.logo_icon}`}>
                    <use href={`${icon}#logo`}></use>
                  </svg>
                </div>
                <span className={css.title}>Podłącz się do świata!</span>
              </div>
            </div>

            <ul>
              <li>
                <a>
                  <svg
                    className={`${css.house}`}
                    width="48px"
                    height="32px"
                    fill="white"
                  >
                    <use href={`${icon}#house`}></use>
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className={`${css.account}`}
                    width="48px"
                    height="32px"
                    fill="white"
                  >
                    <use href={`${icon}#account`}></use>
                  </svg>
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className={`${css.groupPeople}`}
                    width="48px"
                    height="32px"
                    fill="white"
                  >
                    <use href={`${icon}#groupPeople`}></use>
                  </svg>
                  <span>O nas</span>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className={`${css.news}`}
                    width="48px"
                    height="32px"
                    fill="white"
                  >
                    <use href={`${icon}#news`}></use>
                  </svg>
                  <span>Newsy</span>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className={`${css.map}`}
                    width="48px"
                    height="32px"
                    fill="white"
                  >
                    <use href={`${icon}#map`}></use>
                  </svg>
                  <span>Lokalizacja</span>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className={`${css.pen}`}
                    width="48px"
                    height="32px"
                    fill="white"
                  >
                    <use href={`${icon}#pen`}></use>
                  </svg>
                  <span>Zgłoszenia</span>
                </a>
              </li>
            </ul>
            <div className={css.contact}>
              <a className={css.contact_email_display}>
                <div className={css.contact_email_container}>
                  <span>E-mail</span>
                  <span>bok@yesnet.pl</span>
                </div>
              </a>
              <span>|</span>
              <a className={css.contact_phone_display}>
                <div className={css.contact_phone_container}>
                  <span>Telefon</span>
                  <span>+48690860520</span>
                </div>
              </a>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Menu;
