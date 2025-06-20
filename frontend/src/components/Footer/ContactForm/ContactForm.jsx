import React, { useState, useEffect, useRef } from 'react'
import css from './ContactForm.module.css'
import axios from 'axios'
import notiflix from 'notiflix'
import IndividualModal from '../../../pages/Home/Modals/Individual/Individual'
// import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = () => {
  //const [captchaToken, setCaptchaToken] = useState(null)
  const [isPrimaryOptionsVisible, setPrimaryOptionsVisible] = useState(false)
  const [selectedPrimaryValue, setSelectedPrimaryValue] = useState('')
  const [isAdditionalOptionsVisible, setAdditionalOptionsVisible] =
    useState(false)
  const [selectedAdditionalValue, setSelectedAdditionalValue] = useState('')
  const [isAdditionalListOptionsVisible, setAdditionalListOptionsVisible] =
    useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    primaryOptionId: '',
    additionalOptionId: '',
    message: '',
    privatePolicy: false
  })
  const primarySelectRef = useRef(null)
  const additionalSelectRef = useRef(null)
  const [identType, setIdentType] = useState('Imię i nazwisko')
  const [isIdentSelectVisible, setIdentSelectVisible] = useState(false)
  const identSelectRef = useRef(null)
  const [contactType, setContactType] = useState('Telefon')
  const [isContactSelectVisible, setContactSelectVisible] = useState(false)
  const contactSelectRef = useRef(null)
  const [showIndividualModal, setShowIndividualModal] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        primarySelectRef.current &&
        !primarySelectRef.current.contains(event.target)
      ) {
        setPrimaryOptionsVisible(false)
      }
      if (
        additionalSelectRef.current &&
        !additionalSelectRef.current.contains(event.target)
      ) {
        setAdditionalListOptionsVisible(false)
      }
      if (
        identSelectRef.current &&
        !identSelectRef.current.contains(event.target)
      ) {
        setIdentSelectVisible(false)
      }
      if (
        contactSelectRef.current &&
        !contactSelectRef.current.contains(event.target)
      ) {
        setContactSelectVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  //const handleCaptcha = (token) => {
 //   setCaptchaToken(token)
 // }

  const togglePrimaryOptions = () => {
    setPrimaryOptionsVisible(!isPrimaryOptionsVisible)
  }

  const toggleAdditionalOptions = () => {
    setAdditionalListOptionsVisible(!isAdditionalListOptionsVisible)
  }

  const handlePrimaryOptionClick = (value, id) => {
    setSelectedPrimaryValue(value)
    setFormData((prevState) => ({
      ...prevState,
      primaryOptionId: id
    }))
    setPrimaryOptionsVisible(false)
    if (value === 'Zgłoszenie Serwisowe') {
      setAdditionalOptionsVisible(true)
    } else {
      setAdditionalOptionsVisible(false)
    }
    setTimeout(() => {
      if (
        (value === 'Nowe przyłącze' && selectedAdditionalValue === 'Nowy klient') ||
        (value === 'Nowe przyłącze' && formData.additionalOptionId === '2.1')
      ) {
        setShowIndividualModal(true)
      }
    }, 0)
  }

  const handleAdditionalOptionClick = (value, id) => {
    setSelectedAdditionalValue(value)
    setFormData((prevState) => ({
      ...prevState,
      additionalOptionId: id
    }))
    setAdditionalListOptionsVisible(false)
    setTimeout(() => {
      if (
        selectedPrimaryValue === 'Nowe przyłącze' && value === 'Nowy klient'
      ) {
        setShowIndividualModal(true)
      }
    }, 0)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleIdentTypeClick = (value) => {
    setIdentType(value)
    setIdentSelectVisible(false)
    setFormData((prevState) => ({
      ...prevState,
      name: ''
    }))
  }

  const handleContactTypeClick = (value) => {
    setContactType(value)
    setContactSelectVisible(false)
    setFormData((prevState) => ({
      ...prevState,
      email: ''
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //if (!captchaToken) {
    //  notiflix.Notify.failure('Proszę ukończyć weryfikację reCAPTCHA.')
    
    try {
      await axios.post('http://localhost:5000/api/send-general', {
        ...formData,
       // captchaToken
      })
      notiflix.Notify.success('Formularz został wysłany pomyślnie')
    } catch (error) {
      console.error('Error submitting form', error)

      notiflix.Notify.failure('Wystąpił błąd podczas wysyłania formularza.')
    }
  }

  const handleCloseIndividualModal = () => {
    setShowIndividualModal(false)
    setSelectedPrimaryValue('')
    setFormData((prevState) => ({
      ...prevState,
      primaryOptionId: '',
      additionalOptionId: ''
    }))
    setSelectedAdditionalValue('')
  }

  return (
    <>
      {showIndividualModal && (
        <IndividualModal onClose={handleCloseIndividualModal} />
      )}
      <div className={css.contactContainer}>
        <div className={css.contactForm}>
          <h2 className={css.contactForm_title}>Formularz kontaktowy</h2>
          <form onSubmit={handleSubmit} className={css.contactForm_list}>
            <div className={css.contactForm_item}>
              <label htmlFor='category'>Wybierz kategorię:</label>
              <div className={css.customSelectWrapper} ref={primarySelectRef}>
                <div
                  className={css.customSelectValue}
                  onClick={togglePrimaryOptions}
                >
                  {selectedPrimaryValue || '-'}
                  <span
                    className={`${css.arrow} ${
                      isPrimaryOptionsVisible ? css.arrow_left : css.arrow_down
                    } ${isPrimaryOptionsVisible ? 'arrow-down' : ''}`}
                  >
                    &#9660;
                  </span>
                </div>
                <ul
                  className={`${css.customSelectOptions} ${
                    isPrimaryOptionsVisible ? css.show : ''
                  }`}
                >
                  <li
                    id='1.1'
                    onClick={() => handlePrimaryOptionClick('Nowe przyłącze', '1.1')}
                  >
                    Nowe przyłącze
                  </li>
                  <li
                    id='1.2'
                    onClick={() => handlePrimaryOptionClick('Uwagi do usługi', '1.2')}
                  >
                    Uwagi do usługi
                  </li>
                  <li
                    id='1.3'
                    onClick={() => handlePrimaryOptionClick('Inna sprawa', '1.3')}
                  >
                    Inna sprawa
                  </li>
                  <li
                    id='1.4'
                    onClick={() => handlePrimaryOptionClick('Zmiana pakietu usług', '1.4')}
                  >
                    Zmiana pakietu usług
                  </li>
                  <li
                    id='1.5'
                    onClick={() => handlePrimaryOptionClick('Obsługa płatności', '1.5')}
                  >
                    Obsługa płatności
                  </li>
                  <li
                    id='1.6'
                    onClick={() => handlePrimaryOptionClick('Obsługa zwrotów', '1.6')}
                  >
                    Obsługa zwrotów
                  </li>
                  <li
                    id='1.7'
                    onClick={() => handlePrimaryOptionClick('Potrzebuję naprawy', '1.7')}
                  >
                    Potrzebuję naprawy
                  </li>
                </ul>
              </div>
            </div>
            {['1.1', '1.2', '1.3'].includes(formData.primaryOptionId) && (
              <div className={css.contactForm_item}>
                <label htmlFor='clientType'>Typ Klienta:</label>
                <div className={css.customSelectWrapper} ref={additionalSelectRef}>
                  <div
                    className={css.customSelectValue}
                    onClick={toggleAdditionalOptions}
                  >
                    {selectedAdditionalValue || '-'}
                    <span
                      className={`${css.arrow} ${
                        isAdditionalListOptionsVisible
                          ? css.arrow_left
                          : css.arrow_down
                      } ${isAdditionalListOptionsVisible ? 'arrow-down' : ''}`}
                    >
                      &#9660;
                    </span>
                  </div>
                  <ul
                    className={`${css.customSelectOptions} ${
                      isAdditionalListOptionsVisible ? css.show : ''
                    }`}
                  >
                    <li
                      id='2.1'
                      onClick={() => handleAdditionalOptionClick('Nowy klient', '2.1')}
                    >
                      Nowy klient
                    </li>
                    <li
                      id='2.2'
                      onClick={() => handleAdditionalOptionClick('Obecny klient', '2.2')}
                    >
                      Obecny klient
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className={`${css.contactForm_item} ${css.contactForm_item_pad}`}>
              <label htmlFor='identType'>Wybierz sposób identyfikacji:</label>
              <div className={css.customSelectWrapper} ref={identSelectRef}>
                <div
                  className={css.customSelectValue}
                  onClick={() => setIdentSelectVisible(!isIdentSelectVisible)}
                >
                  {identType}
                  <span
                    className={`${css.arrow} ${
                      isIdentSelectVisible ? css.arrow_left : css.arrow_down
                    } ${isIdentSelectVisible ? 'arrow-down' : ''}`}
                  >
                    &#9660;
                  </span>
                </div>
                <ul
                  className={`${css.customSelectOptions} ${
                    isIdentSelectVisible ? css.show : ''
                  }`}
                >
                  <li onClick={() => handleIdentTypeClick('Imię i nazwisko')}>Imię i nazwisko</li>
                  <li onClick={() => handleIdentTypeClick('Nazwa')}>Nazwa</li>
                  <li onClick={() => handleIdentTypeClick('ID z umowy')}>ID z umowy</li>
                </ul>
              </div>
            </div>

            <div className={css.contactForm_item}>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete='off'
                placeholder={identType}
              />
            </div>
            <div className={`${css.contactForm_item} ${css.contactForm_item_pad}`}>
              <label htmlFor='contactType'>Wybierz sposób komunikacji:</label>
              <div className={css.customSelectWrapper} ref={contactSelectRef}>
                <div
                  className={css.customSelectValue}
                  onClick={() => setContactSelectVisible(!isContactSelectVisible)}
                >
                  {contactType}
                  <span
                    className={`${css.arrow} ${
                      isContactSelectVisible ? css.arrow_left : css.arrow_down
                    } ${isContactSelectVisible ? 'arrow-down' : ''}`}
                  >
                    &#9660;
                  </span>
                </div>
                <ul
                  className={`${css.customSelectOptions} ${
                    isContactSelectVisible ? css.show : ''
                  }`}
                >
                  <li onClick={() => handleContactTypeClick('Telefon')}>Telefon</li>
                  <li onClick={() => handleContactTypeClick('E-mail')}>E-mail</li>
                </ul>
              </div>
            </div>
            <div className={css.contactForm_item}>
              <input
                type={contactType === 'Telefon' ? 'tel' : 'email'}
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete='off'
                placeholder={contactType}
              />
            </div>
            <div className={css.contactForm_item}>
              <label htmlFor='message'>Wiadomość:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='6'
                required
                placeholder='Krótki opis problemu'
              ></textarea>
            </div>
           
            <label className={css.privateCheck}>
              <input
                type='checkbox'
                name='privatePolicy'
                onChange={handleChange}
              />
              <p>
                Oświadczam, że zapoznałem się i akceptuję
                <a href='/statute'> regulamin</a> oraz
                <a href='/policy-privacy'> Politykę Prywatności</a>
              </p>
            </label>
            <div className={css.buttonContainer}>
              <button
                className={css.contactForm_button}
                onChange={handleSubmit}
                type='submit'
              >
                <span className={css.contactForm_buttonContent}>Wyślij</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm


 //   <ReCAPTCHA
          //  className={css.captchaToken}
          //  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          //  onChange={handleCaptcha}
          // />