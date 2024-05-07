import React from 'react'
import css from './Footnote.module.css'
import { Link } from 'react-router-dom'

const Footnote = () => {
  return (
    <div className={css.footnote}>
      <div className={css.container}>
        <p className={css.footnote_text}>copyright &copy; 2024 yesNET</p>
        <Link to='/policy-privacy' className={css.link}>
          Polityka Prywatności
        </Link>
        <Link to='/statute' className={css.link}>
          Regulamin
        </Link>
      </div>
    </div>
  )
}

export default Footnote
