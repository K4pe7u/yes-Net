import React, { useState } from 'react'
import css from './FaqTips.module.css'
import dataTips from './dataTips.json'
import { useNavigate } from 'react-router-dom'

const FaqTips = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  return (
    <>
      <div className={css.wrapper}>
        <p className={css.question}>
          Czy Twój internet działa nie wystarczająco dla twoich potrzeb? Sprawdź
          zastosować kilka porad:
        </p>
        <div className={css.accordion}>
          {dataTips.map((item, index) => (
            <div key={index} className={css.item}>
              <div className={css.title} onClick={() => toggle(index)}>
                <h2>{item.step}</h2>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              {item.tip && (
                <div
                  className={`${css.content} ${
                    selected === index ? css.show : ''
                  }`}
                >
                  {item.tip}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={css.information}>
          <p>
            Aby zgłosić zdarzenie, skorzystaj ze sposobności wysyłając SMS na
            numer telefonu 660 480 036.
          </p>
          <p>W treści wiadomości podaj:</p>
          <ol className={css.informationList}>
            <li>
              Imię i nazwisko osoby, na którą jest umowa lub ID (znajduje się w
              nagłówku umowy).
            </li>
            <li>Adres instalacji, gdzie występuje problem. </li>
            <li>Krótki opis usterki.</li>
          </ol>

          <p>
            Po otrzymaniu SMS-a, potwierdzimy odbiór zgłoszenia i rozpoczniemy
            diagnozowanie usługi.
          </p>

          <p>
            Masz również możliwość, skorzystać z
            <a
              onClick={() => {
                navigate('/', {
                  state: { target: ['Footer', [-730, -600, -610]] }
                })
              }}
            >
              &nbsp;Formularza&nbsp;
            </a>
            na stronie głównej, wpisując dane zgodne z polami i opisując problem
            pisemnie.
          </p>

          <p>
            Jeśli usługa zostanie zweryfikowana, skontaktujemy się w celu
            potwierdzenia działania usługi lub zaproponowania wizyty serwisanta.
          </p>
        </div>
      </div>
    </>
  )
}

export default FaqTips
