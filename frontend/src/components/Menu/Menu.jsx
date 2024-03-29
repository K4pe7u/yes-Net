import css from "./Menu.module.css";
import icon from "../../icons/icons.svg";
import { useState } from "react";

const Menu = ({ open, onClose }) => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsSupportOpen(false);
  };

  const toggleSupport = () => {
    setIsSupportOpen(!isSupportOpen);
    setIsCompanyOpen(false);
  };

  return (
    <>
      {
        <>
          <div
            className={`${css.menu} ${open ? css.open : css.close} 

            `}
          >
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

            <ul className={css.navigation}>
              <li className={css.navigation_item}>
                {/* eslint-disable-next-line */}
                <a
                  href="#Header"
                  onClick={onClose}
                  className={css.navigation_link}
                >
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
              <li className={css.navigation_item}>
                {/* eslint-disable-next-line */}
                <a onClick={onClose} className={css.navigation_link}>
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
              <li className={css.navigation_item} onClick={toggleCompany}>
                <div className={css.company_container}>
                  <span
                    className={`${css.company_title} ${
                      isCompanyOpen ? css.company_title_open : ""
                    }`}
                  >
                    Company
                  </span>
                  <span
                    className={`${css.company_open_btn} ${
                      isCompanyOpen ? css.company_open : ""
                    }`}
                  >
                    &#9660;
                  </span>

                  <ul
                    className={`${css.company_navigation} ${
                      isCompanyOpen ? css.company_navigation_open : ""
                    }`}
                  >
                    <li className={css.company_navigation_main_section}>
                      <a href="#News" onClick={onClose}>
                        <svg className={`${css.groupPeople}`} fill="white">
                          <use href={`${icon}#groupPeople`}></use>
                        </svg>
                        <div>
                          <h4>O nas</h4>
                          <span>Dowiedz się więcej!</span>
                        </div>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a onClick={onClose}>
                        <svg className={`${css.news}`} fill="white">
                          <use href={`${icon}#news`}></use>
                        </svg>
                        <div>
                          <h4>Newsy</h4>
                          <span>Wiadomości z sieci</span>
                        </div>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a onClick={onClose}>
                        <svg className={`${css.map}`} fill="white">
                          <use href={`${icon}#map`}></use>
                        </svg>
                        <div>
                          <h4>Lokalizacja</h4>
                          <span>Gdzie jesteśmy?</span>
                        </div>
                      </a>
                    </li>
                    <li className={css.company_navigation_section_break}></li>
                    <li className={css.company_navigation_aside_section}>
                      {/* eslint-disable-next-line */}
                      <a onClick={onClose} href="tel:+48690860520">
                        <svg className={`${css.phone}`} fill="white">
                          <use href={`${icon}#phone`}></use>
                        </svg>
                        <div>
                          <h4>+48690860520</h4>
                        </div>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a onClick={onClose} href="mailto:bok@yesnet.pl">
                        <svg className={`${css.envelop}`} fill="white">
                          <use href={`${icon}#envelop`}></use>
                        </svg>
                        <div>
                          <h4>bok@yesnet.pl</h4>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={css.navigation_item}>
                <div className={css.support_container} onClick={toggleSupport}>
                  <span
                    className={`${css.support_title} ${
                      isSupportOpen ? css.support_title_open : ""
                    }`}
                  >
                    Support
                  </span>
                  <span
                    className={`${css.support_open_btn} ${
                      isSupportOpen ? css.support_open : ""
                    }`}
                  >
                    &#9660;
                  </span>

                  <ul
                    className={`${css.support_navigation} ${
                      isSupportOpen ? css.suppport_navigation_open : ""
                    }`}
                  >
                    <li>
                      <a href="#News" onClick={onClose}>
                        <svg
                          className={`${css.news}`}
                          width="20%"
                          height="50%"
                          fill="white"
                        >
                          <use href={`${icon}#news`}></use>
                        </svg>
                        <div>
                          <h4>Aktualności</h4>
                          <span>Co nowego!</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      {/* eslint-disable-next-line */}
                      <a onClick={onClose}>
                        <svg
                          className={`${css.pen}`}
                          width="20%"
                          height="50%"
                          fill="white"
                        >
                          <use href={`${icon}#pen`}></use>
                        </svg>
                        <div>
                          <h4>Zgłoszenia</h4>
                          <span>W czym problem?</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      {/* eslint-disable-next-line */}
                      <a onClick={onClose}>
                        <svg
                          className={`${css.faq}`}
                          width="20%"
                          height="50%"
                          fill="white"
                        >
                          <use href={`${icon}#faq`}></use>
                        </svg>
                        <div>
                          <h4>FAQ</h4>
                          <span>Znajdź rozwiązanie</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </>
      }
    </>
  );
};

export default Menu;
