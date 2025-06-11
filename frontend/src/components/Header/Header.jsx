import { useEffect, useState } from 'react'
import css from './Header.module.css'
import icon from '../../icons/icons.svg'
import { useLocation } from 'react-router-dom'

const Header = () => {
  let { state } = useLocation()
  let { target } = state || {}
  const [scaledMenu, setScaledMenu] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      window.scrollTo({
        top: sectionToScrollTo.offsetTop - offset[1],
        left: 0,
        behavior: 'smooth'
      })
    } else if (window.matchMedia('(min-width: 1280px)').matches) {
      window.scrollTo({
        top: sectionToScrollTo.offsetTop - offset[2],
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  function handleMobileMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (target) {
      scrollToSection(target[0], target[1])
      window.history.replaceState({}, '')
    } else {
      window.scrollTo(0, 0)
    }
  }, [target])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setScaledMenu(true)
      } else {
        setScaledMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <div className={`${css.header} ${scaledMenu ? css.scaledMenu : ''}`}>
      <div className={css.mobileMenuBtn} onClick={handleMobileMenu}>
        <svg>
          <use href={`${icon}#menuBurger`}></use>
        </svg>
      </div>
      <div className={`${css.mobileContainer} ${isMenuOpen ? css.open : ''}`}>
        <div className={css.mobileMenuCloseBtn} onClick={handleMobileMenu}>
          <span></span>
          <span></span>
        </div>
        <div className={css.logo_icon_container}>
          {/*eslint-disable-next-line*/}
          <a href=''>
            <svg className={`${css.logo_icon}`}>
              <use href={`${icon}#logo`}></use>
            </svg>
          </a>
          <span className={css.logo_text}>
            Skrój Internet <br /> dla Swoich potrzeb
          </span>
        </div>
        <ul className={css.navigation}>
          <li className={css.navigation_item}>
            <a className={css.navigation_link} href='https://panel.yesnet.pl'>
              <svg className={`${css.account}`}>
                <use href={`${icon}#account`}></use>
              </svg>
              <span>Login</span>
            </a>
          </li>
          <li className={css.navigation_item}>
            {/*eslint-disable-next-line*/}
            <a
              className={css.navigation_link}
              onClick={() => {
                scrollToSection('Ourself', [60, 20, 100])
              }}
            >
              <svg className={`${css.groupPeople}`}>
                <use href={`${icon}#groupPeople`}></use>
              </svg>
              <span>O nas</span>
            </a>
          </li>
          <li className={css.navigation_item}>
            {/*eslint-disable-next-line*/}
            <a
              className={css.navigation_link}
              onClick={() => {
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
            {/*eslint-disable-next-line*/}
            <a
              className={css.navigation_link}
              onClick={() => {
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
            {/*eslint-disable-next-line*/}
            <a
              className={css.navigation_link}
              onClick={() => {
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
            <a className={css.navigation_link} onClick={() => {}} href='/faq'>
              <svg className={`${css.faq}`}>
                <use href={`${icon}#faq`}></use>
              </svg>
              <span>FAQ</span>
            </a>
          </li>
          <li className={css.navigation_item}>
            {/*eslint-disable-next-line*/}
            <a
              className={css.navigation_link}
              onClick={() => {
                scrollToSection('Footer', [-1430, -1230, -1550])
              }}
            >
              <svg className={`${css.phone}`}>
                <use href={`${icon}#phone`}></use>
              </svg>
              <span>Kontakt</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
