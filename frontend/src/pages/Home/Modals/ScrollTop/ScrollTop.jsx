import css from './ScrollTop.module.css'
import icon from '../../../../icons/icons.svg'
import { useState, useEffect } from 'react'

const ScrollTop = () => {
  const [btnShow, setBtnShow] = useState(false)

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setBtnShow(true)
      } else {
        setBtnShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <section
        className={`${btnShow ? css.shown : ''} ${css.scrollTop}`}
        onClick={toTop}
      >
        <svg>
          <use href={`${icon}#backToTop`}></use>
        </svg>
      </section>
    </>
  )
}

export default ScrollTop
