import React, { useState, useRef } from 'react'
import css from './FaqContractsAndPayments.module.css'
import data from './dataContractsAndPayments.json'

const FaqContractsAndPayments = () => {
  const [selected, setSelected] = useState(null)
  const listOfTips = useRef(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  const clear = () => {
    const list = listOfTips.current.querySelectorAll(`.${css.content}`)
    list.forEach((item) => {
      if (item.clientHeight) {
        item.style.height = 0
      }
    })
  }

  const grow = (e) => {
    e.stopPropagation()
    clear()
    const content = e.currentTarget.querySelector(`.${css.content}`)
    const txt = content.querySelector(`p`)
    if (content.clientHeight) {
      content.style.height = 0
    } else {
      content.style.height = txt.clientHeight + 'px'
    }
  }

  return (
    <>
      <div className={css.wrapper}>
        <p className={css.question}>
          Tu znajdziesz najczęściej zadawane pytania i odpowiedzi na nie,
          dotyczące umów i płatności w yesNET.
        </p>
        <div className={css.accordion} ref={listOfTips}>
          {data.map((item, index) => (
            <div
              key={index}
              className={css.item}
              onClick={(event) => {
                toggle(index)
                grow(event)
              }}
            >
              <div className={css.title}>
                <h2>{item.question}</h2>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              {item.answer && (
                <div className={`${css.content}`}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FaqContractsAndPayments
