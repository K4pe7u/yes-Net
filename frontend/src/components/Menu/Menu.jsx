import css from './Menu.module.css'
import icon from '../../icons/icons.svg'
import olx from '../../icons/olx.svg'
import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Menu = ({ open, onClose, outsideClick }) => {
  let { state } = useLocation()
  let { target } = state || {}

  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  const scrollToSection = (section, offset) => {
    const sectionToScrollTo = document.getElementById(`${section}`)

    if (
      window.matchMedia('(min-width: 320px)').matches &&
      window.matchMedia('(max-width: 767px)').matches
    ) {
      window.scrollTo({
        top: sectionToScrollTo.offsetTop - offset[0],
        left: 0,
        behavior: 'smooth'
      })
    } else if (
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(max-width: 1279px)').matches
    ) {
      console.log(sectionToScrollTo.offsetTop, offset[1])
      window.scrollTo({
        top: sectionToScrollTo.offsetTop - offset[1],
        left: 0,
        behavior: 'smooth'
      })
    } else if (window.matchMedia('(min-width: 1280px)').matches) {
      console.log(sectionToScrollTo.offsetTop, offset[2])
      window.scrollTo({
        top: sectionToScrollTo.offsetTop - offset[2],
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const toggleCompany = (e) => {
    e.stopPropagation()
    setIsCompanyOpen(!isCompanyOpen)
    setIsSupportOpen(false)
  }

  const toggleSupport = (e) => {
    e.stopPropagation()
    setIsSupportOpen(!isSupportOpen)
    setIsCompanyOpen(false)
  }

  const hideMenuWindows = () => {
    setIsCompanyOpen(false)
    setIsSupportOpen(false)
  }

  useEffect(() => {
    if (target) {
      scrollToSection(target[0], target[1])
      window.history.replaceState({}, '')
    } else {
      window.scrollTo(0, 0)
    }
  }, [target])

  return (
    <>
      {
        <>
          <div className={`${css.menu} ${open ? css.open : css.close}`}>
            <div className={css.menuHeader}>
              <svg className={`${css.arrow_right}`} onClick={onClose}>
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
                <a
                  onClick={outsideClick}
                  className={css.navigation_link}
                  href='https://ipot24.yesnet.pl'
                >
                  <svg className={`${css.account}`}>
                    <use href={`${icon}#account`}></use>
                  </svg>
                  <span>Login</span>
                </a>
              </li>
              <li className={css.navigation_item}>
                <a
                  className={css.navigation_link}
                  onClick={() => {
                    outsideClick()
                    scrollToSection('Ourself', [60, 80, 180])
                  }}
                >
                  <svg className={`${css.groupPeople}`}>
                    <use href={`${icon}#groupPeople`}></use>
                  </svg>
                  <span>O nas</span>
                </a>
              </li>
              <li className={css.navigation_item}>
                <a
                  className={css.navigation_link}
                  onClick={() => {
                    outsideClick()
                    scrollToSection('Footer', [-1430, -1230, -1550])
                  }}
                >
                  <svg className={`${css.map}`}>
                    <use href={`${icon}#map`}></use>
                  </svg>

                  <span>Lokalizacja</span>
                </a>
              </li>
              <li className={css.navigation_item}>
                <a
                  className={css.navigation_link}
                  onClick={() => {
                    outsideClick()
                  }}
                  href='tel:+48690860520'
                >
                  <svg className={`${css.phone}`}>
                    <use href={`${icon}#phone`}></use>
                  </svg>
                  <span>Kontakt</span>
                </a>
              </li>
              <li className={css.navigation_item}>
                <a
                  className={css.navigation_link}
                  onClick={() => {
                    outsideClick()
                    scrollToSection('News', [110, 150, 220])
                  }}
                >
                  <svg className={`${css.news}`}>
                    <use href={`${icon}#news`}></use>
                  </svg>

                  <span>Aktualności</span>
                </a>
              </li>
              <li className={css.navigation_item}>
                <a
                  className={css.navigation_link}
                  onClick={() => {
                    outsideClick()
                    scrollToSection('Footer', [-730, -600, -610])
                  }}
                >
                  <svg className={`${css.pen}`}>
                    <use href={`${icon}#pen`}></use>
                  </svg>
                  <span>Zgłoszenia</span>
                </a>
              </li>
              <li className={css.navigation_item}>
                <a
                  className={css.navigation_link}
                  onClick={() => {
                    outsideClick()
                  }}
                  href='/faq'
                >
                  <svg className={`${css.faq}`}>
                    <use href={`${icon}#faq`}></use>
                  </svg>
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </>
      }
    </>
  )
}

export default Menu
