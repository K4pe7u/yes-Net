import React from 'react'
import css from './Modal.module.css'

const Modal = ({ onClose, children }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={css.modalContent}>
          {/* <div className={css.emptySpace}></div> */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
