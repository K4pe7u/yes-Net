import { useState, useRef } from 'react'
import css from './Individual.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import notiflix from 'notiflix'
import IndividualInput from './IndividualInput'

// Konfiguracja axios
axios.defaults.baseURL = 'http://localhost:5000' // Dodajemy bazowy URL

const IndividualModal = ({ onClose }) => {
  // const savedFormData =
  //   JSON.parse(localStorage.getItem('individualFormData')) || {}
  const limit = 2
  const [step, setStep] = useState(0)
  const [captchaToken, setCaptchaToken] = useState(null)

  const next = () => {
    if (validateStep(step)) setStep((prev) => Math.min(prev + 1, limit))
  }

  const back = () => setStep((prev) => Math.max(prev - 1, 0))

  const validationRefs = {
    contactFirstName: useRef(null),
    contactLastName: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    companyName: useRef(null),
    nip: useRef(null),
    street: useRef(null),
    city: useRef(null),
    postalCode: useRef(null),
    privatePolicy: useRef(null)
  }

  const validators = {
    contactFirstName: (val) => val.trim().length > 1,
    contactLastName: (val) => val.trim().length > 1,
    companyName: (val) => val.trim().length > 1,
    nip: (val) => /^\d{10}$/.test(val),
    street: (val) => val.trim().length > 1,
    city: (val) => val.trim().length > 1,
    postalCode: (val) => /^\d{2}-\d{3}$/.test(val),
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    phone: (val) => /^\+?[0-9\s\-()]{7,15}$/.test(val),
    privatePolicy: (val) => val === true
  }

  const initialValues = {
    captchaToken: null,
    clientType: 'individual',
    contactMethod: 'email',
    isClientTypeOpen: false,
    isContactMethodOpen: false,
    isBandwidthOpen: false,
    sendData: {
      clientType: 'individual',
      contactFirstName: '',
      contactLastName: '',
      companyName: '',
      nip: '',
      street: '',
      city: '',
      postalCode: '',
      contactMethod: 'email',
      email: '',
      phone: '',
      bandwidth: '-',
      devicesCount: '',
      privatePolicy: false,
      additionalMessage: ''
    }
  }

  const [formData, setFormData] = useState(initialValues)

  const handleCaptcha = (token) => {
    setCaptchaToken(token)
  }

  // console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY)

  const validateStep = (step) => {
    if (step === 0) {
      const values = {
        clientType: formData.sendData.clientType,
        contactMethod: formData.sendData.contactMethod,
        contactFirstName: formData.sendData.contactFirstName,
        contactLastName: formData.sendData.contactLastName,
        companyName: formData.sendData.companyName,
        nip: formData.sendData.nip,
        email: formData.sendData.email,
        phone: formData.sendData.phone
      }
      return validateAll(values)
    } else if (step === 1) {
      const values = {
        street: formData.sendData.street,
        city: formData.sendData.city,
        postalCode: formData.sendData.postalCode
      }
      return validateAll(values)
    }
  }

  const validateAll = (values) => {
    const results = {}
    Object.entries(values).forEach((element) => {
      const [key, value] = element
      if (
        (values.clientType === 'individual' &&
          (key === 'companyName' || key === 'nip')) ||
        (values.clientType === 'business' &&
          (key === 'contactFirstName' || key === 'contactLastName'))
      ) {
        return
      }
      if (
        (values.contactMethod === 'email' && key === 'phone') ||
        (values.contactMethod === 'phone' && key === 'email')
      ) {
        return
      }
      if (validators[key])
        results[key] = validationRefs[key].current?.validate()
    })
    return Object.values(results).every(Boolean)
  }

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    let endPointValue = null
    type === 'checkbox' || type === 'radio'
      ? (endPointValue = checked)
      : (endPointValue = value)

    setFormData((prevState) => ({
      ...prevState,
      sendData: {
        ...prevState.sendData,
        [name]: endPointValue
      }
    }))
  }

  const setFormDataStates = (n, v) => {
    setFormData((prevState) => ({
      ...prevState,
      [n]: v
    }))
  }

  const setFieldValue = (n, v) => {
    setFormData((prevState) => ({
      ...prevState,
      sendData: {
        ...prevState.sendData,
        [n]: v
      }
    }))
  }

  async function onSubmit() {
    let values = formData.sendData

    if (!captchaToken) {
      notiflix.Notify.info('Proszę ukończyć weryfikację reCAPTCHA.')
      return
    }
    if (validateAll(values)) {
      try {
        const response = await axios.post('/api/send-individual', {
          ...values,
          captchaToken
        })
        console.log('Odpowiedź z serwera:', response.data)

        if (response.status === 200) {
          // localStorage.removeItem('individualFormData')
          notiflix.Notify.success('Formularz został wysłany pomyślnie!')
          onClose()
        } else {
          throw new Error('Błąd podczas wysyłania formularza')
        }
      } catch (error) {
        console.error('Error:', error.response?.data || error.message)
        notiflix.Notify.failure(
          error.response?.data?.error ||
            'Wystąpił błąd podczas wysyłania formularza.'
        )
      }
    }
  }

  const toggleClientTypeSelect = () =>
    setFormDataStates('isClientTypeOpen', !formData.isClientTypeOpen)
  const toggleContactMethodSelect = () =>
    setFormDataStates('isContactMethodOpen', !formData.isContactMethodOpen)
  const toggleBandwidthSelect = () =>
    setFormDataStates('isBandwidthOpen', !formData.isBandwidthOpen)

  // useEffect(() => {
  //   localStorage.setItem('individualFormData', JSON.stringify(formData))
  //   // console.log(formData)
  // }, [formData])

  return (
    <>
      <div className={css.overlay}>
        <ul
          className={css.modalsList}
          style={{ transform: `translateX(-${step * (100 / (limit + 1))}%)` }}
        >
          <li className={css.modalContainer}>
            <div className={css.modal}>
              <div className={css.modalContent}>
                <div>
                  <span className={css.modalTitle}>Podłącz się do świata!</span>
                  <p className={css.modalDescription}>
                    Interesuje Cię INTERNET z pasją? <br />
                    Ciekawi Cię co mamy do zaoferowania? <br />
                    Prześlij formularz, a skontaktujemy się z Tobą!
                  </p>
                </div>
                <label className={css.formItem}>
                  <span className={css.formItem_optionTitle}>Typ klienta:</span>
                  <div className={css.customSelectWrapper}>
                    <div
                      className={css.customSelectValue}
                      onClick={toggleClientTypeSelect}
                    >
                      {formData.clientType === 'individual'
                        ? 'Indywidualny'
                        : formData.clientType === 'business'
                        ? 'Biznesowy'
                        : '-'}
                      <span className={css.arrow}>▼</span>
                    </div>
                    <ul
                      className={`${css.customSelectOptions} ${
                        formData.isClientTypeOpen ? css.show : ''
                      }`}
                    >
                      <li
                        onClick={() => {
                          setFieldValue('clientType', 'individual')
                          setFieldValue('companyName', '')
                          setFieldValue('nip', '')
                          setFormDataStates('clientType', 'individual')
                          setFormDataStates('isClientTypeOpen', false)
                          validationRefs.companyName.current?.resetFieldValidation()
                          validationRefs.nip.current?.resetFieldValidation()
                        }}
                      >
                        Indywidualny
                      </li>
                      <li
                        onClick={() => {
                          setFieldValue('clientType', 'business')
                          setFieldValue('contactFirstName', '')
                          setFieldValue('contactLastName', '')
                          setFormDataStates('clientType', 'business')
                          setFormDataStates('isClientTypeOpen', false)
                          validationRefs.contactFirstName.current?.resetFieldValidation()
                          validationRefs.contactLastName.current?.resetFieldValidation()
                        }}
                      >
                        Biznesowy
                      </li>
                    </ul>
                  </div>
                </label>
                {formData.clientType === 'individual' ? (
                  <>
                    <label className={css.formItem}>
                      <span className={css.formItem_optionTitle}>
                        Osoba kontaktowa*:
                      </span>
                      <IndividualInput
                        ref={validationRefs.contactFirstName}
                        type='text'
                        name='contactFirstName'
                        placeholder='Imię'
                        onChange={handleChange}
                        value={formData.sendData.contactFirstName}
                        validator={validators['contactFirstName']}
                      />
                      <IndividualInput
                        ref={validationRefs.contactLastName}
                        type='text'
                        name='contactLastName'
                        placeholder='Nazwisko'
                        value={formData.sendData.contactLastName}
                        onChange={handleChange}
                        validator={validators['contactLastName']}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <label className={css.formItem}>
                      <span className={css.formItem_optionTitle}>
                        Dane firmy*:
                      </span>
                      <IndividualInput
                        ref={validationRefs.companyName}
                        type='text'
                        name='companyName'
                        placeholder='Nazwa firmy'
                        value={formData.sendData.companyName}
                        onChange={handleChange}
                        validator={validators['companyName']}
                      />
                      <IndividualInput
                        ref={validationRefs.nip}
                        type='text'
                        name='nip'
                        placeholder='NIP'
                        value={formData.sendData.nip}
                        onChange={handleChange}
                        validator={validators['nip']}
                      />
                    </label>
                  </>
                )}
                <div>
                  <label className={css.formItem}>
                    <span className={css.formItem_optionTitle}>
                      Forma kontaktu*:
                    </span>
                    <div className={css.customSelectWrapper}>
                      <div
                        className={css.customSelectValue}
                        onClick={toggleContactMethodSelect}
                      >
                        {formData.sendData.contactMethod === 'email'
                          ? 'Email'
                          : formData.sendData.contactMethod === 'phone'
                          ? 'Telefon'
                          : '-'}
                        <span className={css.arrow}>▼</span>
                      </div>
                      <ul
                        className={`${css.customSelectOptions} ${
                          formData.isContactMethodOpen ? css.show : ''
                        }`}
                      >
                        <li
                          onClick={() => {
                            setFieldValue('contactMethod', 'email')
                            setFieldValue('phone', '')
                            setFormDataStates('contactMethod', 'email')
                            setFormDataStates('isContactMethodOpen', false)
                            validationRefs.phone.current?.resetFieldValidation()
                          }}
                        >
                          Email
                        </li>
                        <li
                          onClick={() => {
                            setFieldValue('contactMethod', 'phone')
                            setFieldValue('email', '')
                            setFormDataStates('contactMethod', 'phone')
                            setFormDataStates('isContactMethodOpen', false)
                            validationRefs.email.current?.resetFieldValidation()
                          }}
                        >
                          Telefon
                        </li>
                      </ul>
                    </div>
                  </label>

                  {formData.contactMethod === 'email' ? (
                    <label className={css.formItem}>
                      <IndividualInput
                        ref={validationRefs.email}
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={formData.sendData.email}
                        validator={validators['email']}
                      />
                    </label>
                  ) : (
                    <label className={css.formItem}>
                      <IndividualInput
                        ref={validationRefs.phone}
                        type='tel'
                        name='phone'
                        placeholder='Telefon'
                        onChange={handleChange}
                        value={formData.sendData.phone}
                        validator={validators['phone']}
                      />
                    </label>
                  )}
                </div>
              </div>
              <div className={css.selectionContainer}>
                <button className={css.selectionChoice} onClick={onClose}>
                  Anuluj
                </button>
                <button className={css.selectionChoice} onClick={next}>
                  Następny
                </button>
              </div>
              <span className={css.footNote}>
                <span style={{ color: '#fff' }}>*</span> - Pole Wymagane
              </span>
            </div>
          </li>
          <li className={css.modalContainer}>
            <div className={css.modal}>
              <div className={css.modalContent}>
                <div>
                  <span className={css.modalTitle}>Podłącz się do świata!</span>
                </div>
                <label className={css.formItem}>
                  <span className={css.formItem_optionTitle}>Adres*:</span>
                  <IndividualInput
                    ref={validationRefs.street}
                    type='text'
                    name='street'
                    placeholder='Ulica oraz Nr domu/lokalu'
                    onChange={handleChange}
                    value={formData.sendData.street}
                    validator={validators['street']}
                  />
                  <IndividualInput
                    ref={validationRefs.city}
                    type='text'
                    name='city'
                    placeholder='Miejscowość'
                    onChange={handleChange}
                    value={formData.sendData.city}
                    validator={validators['city']}
                  />
                  <IndividualInput
                    ref={validationRefs.postalCode}
                    type='text'
                    name='postalCode'
                    placeholder='Kod pocztowy'
                    onChange={handleChange}
                    value={formData.sendData.postalCode}
                    validator={validators['postalCode']}
                  />
                </label>

                <label className={css.formItem}>
                  <span className={css.formItem_optionTitle}>
                    Ilość urządzeń w miejscu instalacji:
                  </span>
                  <input
                    type='number'
                    name='devicesCount'
                    onChange={handleChange}
                    value={formData.sendData.devicesCount}
                    placeholder='0'
                    style={{
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield',
                      appearance: 'none'
                    }}
                  />
                </label>
              </div>
              <div className={css.selectionContainer}>
                <button className={css.selectionChoice} onClick={onClose}>
                  Anuluj
                </button>
                <button className={css.selectionChoice} onClick={back}>
                  Poprzedni
                </button>
                <button className={css.selectionChoice} onClick={next}>
                  Następny
                </button>
              </div>
              <span className={css.footNote}>
                <span style={{ color: '#fff' }}>*</span> - Pole Wymagane
              </span>
            </div>
          </li>
          <li className={css.modalContainer}>
            <div className={css.modal}>
              <div className={css.modalContent}>
                <div>
                  <span className={css.modalTitle}>Podłącz się do świata!</span>
                </div>
                <label className={css.formItem}>
                  <span className={css.formItem_optionTitle}>
                    Zainteresowanie przepustowością:
                  </span>
                  <div className={css.customSelectWrapper}>
                    <div
                      className={css.customSelectValue}
                      onClick={toggleBandwidthSelect}
                    >
                      {formData.sendData.bandwidth || '-'}
                      <span className={css.arrow}>▼</span>
                    </div>
                    <ul
                      className={`${css.customSelectOptions} ${
                        formData.isBandwidthOpen ? css.show : ''
                      }`}
                    >
                      <li
                        onClick={() => {
                          setFieldValue('bandwidth', '30/30')
                          setFormDataStates('isBandwidthOpen', false)
                        }}
                      >
                        30/30
                      </li>
                      <li
                        onClick={() => {
                          setFieldValue('bandwidth', '50/50')
                          setFormDataStates('isBandwidthOpen', false)
                        }}
                      >
                        50/50
                      </li>
                      <li
                        onClick={() => {
                          setFieldValue('bandwidth', '100/100')
                          setFormDataStates('isBandwidthOpen', false)
                        }}
                      >
                        100/100
                      </li>
                      <li
                        onClick={() => {
                          setFieldValue('bandwidth', '200/200')
                          setFormDataStates('isBandwidthOpen', false)
                        }}
                      >
                        200/200
                      </li>
                      <li
                        onClick={() => {
                          setFieldValue('bandwidth', '500/500')
                          setFormDataStates('isBandwidthOpen', false)
                        }}
                      >
                        500/500
                      </li>
                    </ul>
                  </div>
                </label>
                <label className={css.formItem}>
                  <span className={css.formItem_optionTitle}>
                    Dodatkowa Treść:
                  </span>
                  <textarea
                    name='additionalMessage'
                    placeholder='Wiadomość'
                    onChange={handleChange}
                    rows={4}
                    value={formData.sendData.additionalMessage}
                  />
                </label>
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptcha}
                />
                <label className={css.privateCheck}>
                  <IndividualInput
                    type='checkbox'
                    name='privatePolicy'
                    onChange={handleChange}
                    value={formData.sendData.privatePolicy}
                    ref={validationRefs.privatePolicy}
                    validator={validators['privatePolicy']}
                    desc={
                      <>
                        Oświadczam, że zapoznałem się i akceptuję
                        <a href='/statute'> regulamin</a> oraz
                        <a href='/policy-privacy'> Politykę Prywatności</a> *
                      </>
                    }
                  />
                </label>
              </div>
              <div className={css.selectionContainer}>
                <button className={css.selectionChoice} onClick={onClose}>
                  Anuluj
                </button>
                <button className={css.selectionChoice} onClick={back}>
                  Poprzedni
                </button>
              </div>
              <div className={css.submitContainer}>
                <button className={css.submitBtn} onClick={onSubmit}>
                  Wyślij
                </button>
              </div>
              <span className={css.footNote}>
                <span style={{ color: '#fff' }}>*</span> - Pole Wymagane
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default IndividualModal
