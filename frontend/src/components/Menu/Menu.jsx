import React from "react";
import css from "./Menu.module.css";
import icon from "../../icons/icons.svg";

const Menu = ({ open, onClose }) => {
  React.useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      body.style.overflow = "auto";
    };
  }, [open]);

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
                <a /*href="#" */>
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
                <a /*href="#" */>
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
                <a /*href="#" */>
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
                <a /*href="#" */>
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
                <a /*href="#" */>
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
                <a /*href="#" */>
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
          </div>
        </>
      }
    </>
  );
};

export default Menu;
