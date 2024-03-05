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
                <a href="#Header" onClick={onClose}>
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
                <a onClick={onClose}>
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
                  <span className={css.company_title}>Company</span>
                  <span
                    className={`${css.company_open_btn} ${
                      isCompanyOpen ? css.company_open : ""
                    }`}
                  >
                    &#9660;
                  </span>
                  {isCompanyOpen && (
                    <ul className={css.company_navigation}>
                      <li className={css.company_navigation_item}>
                        <ul>
                          <li></li>
                          <li></li>
                        </ul>
                      </li>
                      <li className={css.company_navigation_item}>
                        <ul className={css.contact}>
                          <li></li>
                          <li></li>
                        </ul>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className={css.navigation_item}>
                <div className={css.support_container} onClick={toggleSupport}>
                  <span className={css.support_title}>Support</span>
                  <span
                    className={`${css.support_open_btn} ${
                      isSupportOpen ? css.support_open : ""
                    }`}
                  >
                    &#9660;
                  </span>
                  {isSupportOpen && (
                    <ul className={css.support_navigation}>
                      <li>Newsy</li>
                      <li>Zgłoszenia</li>
                      <li>FAQ</li>
                    </ul>
                  )}
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
