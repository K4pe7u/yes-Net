import { useEffect, useState } from 'react'
import css from './Header.module.css'
import icon from '../../icons/icons.svg'
import { useLocation } from 'react-router-dom'

const Header = () => {
  let { state } = useLocation()
  let { target } = state || {}
  const [scaledMenu, setScaledMenu] = useState(false)

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

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
    <div className={`${css.header}`}>
      <div className={css.logo_icon_container}>
        <svg className={`${css.logo_icon}`} onClick={toTop}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </div>
      <ul className={css.navigation}>
        <li className={css.navigation_item}>
          <a className={css.navigation_link} href='https://ipot24.yesnet.pl'>
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
  )
}

export default Header
