import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
import css from './Individual.module.css'
// import ReCAPTCHA from 'react-google-recaptcha'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import notiflix from 'notiflix'

// Konfiguracja axios
axios.defaults.baseURL = 'http://localhost:5000'; // Dodajemy bazowy URL

const IndividualModal = ({ onClose }) => {
  const [showInstallAddressInput, setShowInstallAddressInput] = useState(false)
  // const [captchaToken, setCaptchaToken] = useState(null)
  const [clientType, setClientType] = useState('individual')
  const [contactMethod, setContactMethod] = useState('email')
  const [isClientTypeOpen, setIsClientTypeOpen] = useState(false)
  const [isContactMethodOpen, setIsContactMethodOpen] = useState(false)
  const [isBandwidthOpen, setIsBandwidthOpen] = useState(false)

  const savedFormData = JSON.parse(localStorage.getItem('individualFormData')) || {}

  // const handleCaptcha = (token) => {
  //   setCaptchaToken(token)
  // }

  const initialValues = {
    clientType: clientType || '-',
    contactFirstName: savedFormData.contactFirstName || '',
    contactLastName: savedFormData.contactLastName || '',
    companyName: savedFormData.companyName || '',
    nip: savedFormData.nip || '',
    street: savedFormData.street || '',
    city: savedFormData.city || '',
    postalCode: savedFormData.postalCode || '',
    installStreet: savedFormData.installStreet || '',
    installCity: savedFormData.installCity || '',
    installPostalCode: savedFormData.installPostalCode || '',
    contactMethod: contactMethod || '-',
    email: savedFormData.email || '',
    phone: savedFormData.phone || '',
    bandwidth: savedFormData.bandwidth || '-',
    devicesCount: '',
    privatePolicy: savedFormData.privatePolicy || false
  }

  const validationSchema = Yup.object({
    clientType: Yup.string().required('Wybierz typ klienta'),
    contactFirstName: Yup.string().when('clientType', {
      is: (val) => val === 'individual',
      then: () => Yup.string().required('Imię jest wymagane')
    }),
    contactLastName: Yup.string().when('clientType', {
      is: (val) => val === 'individual',
      then: () => Yup.string().required('Nazwisko jest wymagane')
    }),
    companyName: Yup.string().when('clientType', {
      is: (val) => val === 'business',
      then: () => Yup.string().required('Nazwa firmy jest wymagana')
    }),
    nip: Yup.string().when('clientType', {
      is: (val) => val === 'business',
      then: () => Yup.string().required('NIP jest wymagany')
    }),
    street: Yup.string().required('Ulica jest wymagana'),
    city: Yup.string().required('Miasto jest wymagane'),
    postalCode: Yup.string().required('Kod pocztowy jest wymagany'),
    contactMethod: Yup.string().required('Wybierz formę kontaktu'),
    email: Yup.string().when('contactMethod', {
      is: (val) => val === 'email',
      then: () => Yup.string().email('Nieprawidłowy email').required('Email jest wymagany')
    }),
    phone: Yup.string().when('contactMethod', {
      is: (val) => val === 'phone',
      then: () => Yup.string()
        .matches(/^\+48 \d{3} \d{3} \d{3}$/, 'Nieprawidłowy format telefonu (np. +48 123 456 789)')
        .required('Telefon jest wymagany')
    }),
    bandwidth: Yup.string().required('Wybierz przepustowość'),
    devicesCount: Yup.number()
      .typeError('Ilość urządzeń musi być liczbą')
      .positive('Ilość urządzeń musi być większa od zera'),
    privatePolicy: Yup.boolean().oneOf(
      [true],
      'Musisz zaakceptować regulamin i politykę prywatności'
    )
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // if (!captchaToken) {
      //   notiflix.Notify.info('Proszę ukończyć weryfikację reCAPTCHA.')
      //   return
      // }

      try {
        console.log('Wysyłane dane:', values);
        const response = await axios.post('/api/send-individual', {
          ...values,
           // captchaToken
        });
        console.log('Odpowiedź z serwera:', response.data);

        if (response.status === 200) {
          notiflix.Notify.success('Formularz został wysłany pomyślnie!')
          resetForm()
          localStorage.removeItem('individualFormData')
          onClose()
        } else {
          throw new Error('Błąd podczas wysyłania formularza')
        }
      } catch (error) {
        console.error('Error:', error.response?.data || error.message)
        notiflix.Notify.failure(error.response?.data?.error || 'Wystąpił błąd podczas wysyłania formularza.')
      } finally {
        setSubmitting(false)
      }
    }
  })

  useEffect(() => {
    localStorage.setItem('individualFormData', JSON.stringify(formik.values))
  }, [formik.values])

  const handleBackButton = () => {
    setShowInstallAddressInput(false)
    formik.setFieldValue('installStreet', '')
    formik.setFieldValue('installCity', '')
    formik.setFieldValue('installPostalCode', '')
  }
  const handleReset = () => {
    formik.resetForm();
    localStorage.removeItem('individualFormData');
    setClientType('individual');
    setContactMethod('email');
    setIsClientTypeOpen(false);
    setIsContactMethodOpen(false);
    setIsBandwidthOpen(false);
    setShowInstallAddressInput(false);
  }

  const toggleClientTypeSelect = () => setIsClientTypeOpen(!isClientTypeOpen)
  const toggleContactMethodSelect = () => setIsContactMethodOpen(!isContactMethodOpen)
  const toggleBandwidthSelect = () => setIsBandwidthOpen(!isBandwidthOpen)

  return (
    <Modal onClose={onClose}>
      <span className={css.modalTitle}>Podłącz się do świata!</span>
      <p className={css.modalDescription}>
        Interesuje Cię INTERNET z pasją? <br />
        Ciekawi Cię co mamy do zaoferowania? <br />
        Prześlij formularz, a skontaktujemy się z Tobą!
      </p>
      <form onSubmit={formik.handleSubmit} className={css.formMainSet}>
        <label className={css.formItem}>
          <span>Typ klienta:</span>
          <div className={css.customSelectWrapper}>
            <div className={css.customSelectValue} onClick={toggleClientTypeSelect}>
              {formik.values.clientType === 'individual' ? 'Indywidualny' : formik.values.clientType === 'business' ? 'Biznesowy' : '-'}
              <span className={css.arrow}>▼</span>
            </div>
            <ul className={`${css.customSelectOptions} ${isClientTypeOpen ? css.show : ''}`}>
              <li onClick={() => {
                formik.setFieldValue('clientType', 'individual')
                setClientType('individual')
                setIsClientTypeOpen(false)
              }}>Indywidualny</li>
              <li onClick={() => {
                formik.setFieldValue('clientType', 'business')
                setClientType('business')
                setIsClientTypeOpen(false)
              }}>Biznesowy</li>
            </ul>
          </div>
          {formik.touched.clientType && formik.errors.clientType ? (
            <div className={css.yupError}>{formik.errors.clientType}</div>
          ) : null}
        </label>

        {clientType === 'individual' ? (
          <>
            <label className={css.formItem}>
              <span>Osoba kontaktowa:</span>
              <input
                type='text'
                name='contactFirstName'
                placeholder='Imię'
                value={formik.values.contactFirstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contactFirstName && formik.errors.contactFirstName ? (
                <div className={css.yupError}>{formik.errors.contactFirstName}</div>
              ) : null}
              <input
                type='text'
                name='contactLastName'
                placeholder='Nazwisko'
                value={formik.values.contactLastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contactLastName && formik.errors.contactLastName ? (
                <div className={css.yupError}>{formik.errors.contactLastName}</div>
              ) : null}
            </label>
          </>
        ) : (
          <>
            <label className={css.formItem}>
              <span>Dane firmy:</span>
              <input
                type='text'
                name='companyName'
                placeholder='Nazwa firmy'
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <div className={css.yupError}>{formik.errors.companyName}</div>
              ) : null}
              <input
                type='text'
                name='nip'
                placeholder='NIP'
                value={formik.values.nip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nip && formik.errors.nip ? (
                <div className={css.yupError}>{formik.errors.nip}</div>
              ) : null}
            </label>
          </>
        )}

        <label className={css.formItem}>
          <span>Adres:</span>
          <input
            type='text'
            name='street'
            placeholder='Ulica'
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && formik.errors.street ? (
            <div className={css.yupError}>{formik.errors.street}</div>
          ) : null}
          <input
            type='text'
            name='city'
            placeholder='Miejscowość'
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className={css.yupError}>{formik.errors.city}</div>
          ) : null}
          <input
            type='text'
            name='postalCode'
            placeholder='Kod pocztowy'
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.postalCode && formik.errors.postalCode ? (
            <div className={css.yupError}>{formik.errors.postalCode}</div>
          ) : null}
        </label>
        {!showInstallAddressInput && (
          <button
            className={css.formItem_buttonAdditional}
            type='button'
            onClick={() => setShowInstallAddressInput(true)}
          >
            Inny adres instalacji
          </button>
        )}
        {showInstallAddressInput && (
          <>
            <label className={css.formItem}>
              <span>Adres instalacji:</span>
              <input
                type='text'
                name='installStreet'
                placeholder='Ulica '
                value={formik.values.installStreet}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.installStreet && formik.errors.installStreet ? (
                <div>{formik.errors.installStreet}</div>
              ) : null}
              <input
                type='text'
                name='installCity'
                placeholder='Miejscowość'
                value={formik.values.installCity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.installCity && formik.errors.installCity ? (
                <div>{formik.errors.installCity}</div>
              ) : null}
              <input
                type='text'
                name='installPostalCode'
                placeholder='Kod pocztowy '
                value={formik.values.installPostalCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.installPostalCode &&
              formik.errors.installPostalCode ? (
                <div>{formik.errors.installPostalCode}</div>
              ) : null}
            </label>
            <button
              className={css.formItem_buttonBack}
              type='button'
              onClick={handleBackButton}
            >
              Cofnij
            </button>
          </>
        )}

        <label className={css.formItem}>
          <span>Forma kontaktu:</span>
          <div className={css.customSelectWrapper}>
            <div className={css.customSelectValue} onClick={toggleContactMethodSelect}>
              {formik.values.contactMethod === 'email' ? 'Email' : formik.values.contactMethod === 'phone' ? 'Telefon' : '-'}
              <span className={css.arrow}>▼</span>
            </div>
            <ul className={`${css.customSelectOptions} ${isContactMethodOpen ? css.show : ''}`}>
              <li onClick={() => {
                formik.setFieldValue('contactMethod', 'email')
                setContactMethod('email')
                setIsContactMethodOpen(false)
              }}>Email</li>
              <li onClick={() => {
                formik.setFieldValue('contactMethod', 'phone')
                setContactMethod('phone')
                setIsContactMethodOpen(false)
              }}>Telefon</li>
            </ul>
          </div>
          {formik.touched.contactMethod && formik.errors.contactMethod ? (
            <div className={css.yupError}>{formik.errors.contactMethod}</div>
          ) : null}
        </label>

        {contactMethod === 'email' ? (
          <label className={css.formItem}>
            
            <input
              type='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={css.yupError}>{formik.errors.email}</div>
            ) : null}
          </label>
        ) : (
          <label className={css.formItem}>
            
            <input
              type='tel'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className={css.yupError}>{formik.errors.phone}</div>
            ) : null}
          </label>
        )}

        <label className={css.formItem}>
          <span>Zainteresowany przepustowością internetu:</span>
          <div className={css.customSelectWrapper}>
            <div className={css.customSelectValue} onClick={toggleBandwidthSelect}>
              {formik.values.bandwidth || '-'}
              <span className={css.arrow}>▼</span>
            </div>
            <ul className={`${css.customSelectOptions} ${isBandwidthOpen ? css.show : ''}`}>
              <li onClick={() => {
                formik.setFieldValue('bandwidth', '32/32')
                setIsBandwidthOpen(false)
              }}>32/32</li>
              <li onClick={() => {
                formik.setFieldValue('bandwidth', '100/100')
                setIsBandwidthOpen(false)
              }}>100/100</li>
              <li onClick={() => {
                formik.setFieldValue('bandwidth', '300/300')
                setIsBandwidthOpen(false)
              }}>300/300</li>
              <li onClick={() => {
                formik.setFieldValue('bandwidth', '500/500')
                setIsBandwidthOpen(false)
              }}>500/500</li>
            </ul>
          </div>
          {formik.touched.bandwidth && formik.errors.bandwidth ? (
            <div className={css.yupError}>{formik.errors.bandwidth}</div>
          ) : null}
        </label>

        <label className={css.formItem}>
          <span>Ilość urządzeń w miejscu instalacji:</span>
          <input
            type='number'
            name='devicesCount'
            value={formik.values.devicesCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='0'
            style={{ WebkitAppearance: 'none', MozAppearance: 'textfield', appearance: 'none' }}
          />
          {formik.touched.devicesCount && formik.errors.devicesCount ? (
            <div className={css.yupError}>{formik.errors.devicesCount}</div>
          ) : null}
        </label>

        <button
          className={css.formItem_buttonReset}
          type='button'
          onClick={handleReset}
        >
          Reset
        </button>
        {/* <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        /> */}
        <label className={css.privateCheck}>
          <input
            type='checkbox'
            name='privatePolicy'
            checked={formik.values.privatePolicy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.privatePolicy && formik.errors.privatePolicy ? (
            <div className={css.yupError}>{formik.errors.privatePolicy}</div>
          ) : null}
          <p>
            Oświadczam, że zapoznałem się i akceptuję
            <a href='/statute'> regulamin</a> oraz
            <a href='/policy-privacy'> Politykę Prywatności</a>
          </p>
        </label>
        <button className={css.formItem_button} type='submit'>
          Wyślij
        </button>
      </form>
    </Modal>
  )
}

export default IndividualModal
