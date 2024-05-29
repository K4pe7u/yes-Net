import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import css from './Individual.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const IndividualModal = ({ onClose }) => {
  const [showInstallAddressInput, setShowInstallAddressInput] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const savedFormData = JSON.parse(localStorage.getItem('individualFormData'));

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const initialValues = savedFormData || {
    contactFirstName: '',
    contactLastName: '',
    street: '',
    city: '',
    postalCode: '',
    email: '',
    phone: '',
    devicesCount: '',
    installStreet: '',
    installCity: '',
    installPostalCode: '',
    privatePolicy: false,
  };

  const validationSchema = Yup.object({
    contactFirstName: Yup.string().required('Imię jest wymagane'),
    contactLastName: Yup.string().required('Nazwisko jest wymagane'),
    street: Yup.string().required('Ulica jest wymagana'),
    city: Yup.string().required('Miasto jest wymagane'),
    postalCode: Yup.string().required('Kod pocztowy jest wymagany'),
    email: Yup.string()
      .email('Nieprawidłowy email')
      .required('Email jest wymagany'),
    phone: Yup.string().required('Telefon jest wymagany'),
    devicesCount: Yup.number()
      .typeError('*Ilość urządzeń musi być liczbą')
      .positive('*Ilość urządzeń musi być większa od zera')
      .required('*Ilość urządzeń jest wymagana'),
    privatePolicy: Yup.boolean().oneOf(
      [true],
      'Musisz zaakceptować regulamin i politykę prywatności'
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      if (!captchaToken) {
        alert('Proszę ukończyć weryfikację reCAPTCHA');
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:5000/api/send-individual',
          {
            ...values,
            captchaToken,
          }
        );

        if (response.status === 200) {
          alert('Formularz został wysłany pomyślnie!');
          resetForm();
          localStorage.removeItem('individualFormData');
          onClose();
        } else {
          throw new Error('Błąd podczas wysyłania formularza');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Wystąpił błąd podczas wysyłania formularza.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    localStorage.setItem('individualFormData', JSON.stringify(formik.values));
  }, [formik.values]);

  const handleBackButton = () => {
    setShowInstallAddressInput(false);
    formik.setFieldValue('installStreet', '');
    formik.setFieldValue('installCity', '');
    formik.setFieldValue('installPostalCode', '');
  };
  const handleReset = () => {
    formik.resetForm();
    localStorage.removeItem('individualFormData');
  };

  return (
    <Modal onClose={onClose}>
      <span className={css.modalTitle}>Podłącz się do świata!</span>
      <p className={css.modalDescription}>
        Interesujesz się Usługami yesNET? <br />
        Ciekawi Cię co mamy do zaoferowania? <br />
        Prześli formualrz, a skontaktujemy się z Tobą!
      </p>
      <form onSubmit={formik.handleSubmit} className={css.formMainSet}>
        <label className={css.formItem}>
          <span>Osoba kontaktowa:</span>
          <input
            type="text"
            name="contactFirstName"
            placeholder="Imię"
            value={formik.values.contactFirstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contactFirstName && formik.errors.contactFirstName ? (
            <div className={css.yupError}>{formik.errors.contactFirstName}</div>
          ) : null}
          <input
            type="text"
            name="contactLastName"
            placeholder="Nazwisko"
            value={formik.values.contactLastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contactLastName && formik.errors.contactLastName ? (
            <div className={css.yupError}>{formik.errors.contactLastName}</div>
          ) : null}
        </label>

        <label className={css.formItem}>
          <span>Adres:</span>
          <input
            type="text"
            name="street"
            placeholder="Ulica"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && formik.errors.street ? (
            <div className={css.yupError}>{formik.errors.street}</div>
          ) : null}
          <input
            type="text"
            name="city"
            placeholder="Miejscowość"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className={css.yupError}>{formik.errors.city}</div>
          ) : null}
          <input
            type="text"
            name="postalCode"
            placeholder="Kod pocztowy"
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
            type="button"
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
                type="text"
                name="installStreet"
                placeholder="Ulica "
                value={formik.values.installStreet}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.installStreet && formik.errors.installStreet ? (
                <div>{formik.errors.installStreet}</div>
              ) : null}
              <input
                type="text"
                name="installCity"
                placeholder="Miejscowość"
                value={formik.values.installCity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.installCity && formik.errors.installCity ? (
                <div>{formik.errors.installCity}</div>
              ) : null}
              <input
                type="text"
                name="installPostalCode"
                placeholder="Kod pocztowy "
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
              type="button"
              onClick={handleBackButton}
            >
              Cofnij
            </button>
          </>
        )}

        <label className={css.formItem}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={css.yupError}>{formik.errors.email}</div>
          ) : null}
        </label>
        <label className={css.formItem}>
          <span>Telefon:</span>
          <input
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={css.yupError}>{formik.errors.phone}</div>
          ) : null}
        </label>
        <label className={css.formItem}>
          <span>Ilość urządzeń podłączonych do sieci:</span>
          <input
            type="text"
            name="devicesCount"
            inputMode="numeric"
            value={formik.values.devicesCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.devicesCount && formik.errors.devicesCount ? (
            <div className={css.yupError}>{formik.errors.devicesCount}</div>
          ) : null}
        </label>
        <button
          className={css.formItem_buttonReset}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        />
        <label className={css.privateCheck}>
          <input
            type="checkbox"
            name="privatePolicy"
            checked={formik.values.privatePolicy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.privatePolicy && formik.errors.privatePolicy ? (
            <div className={css.yupError}>{formik.errors.privatePolicy}</div>
          ) : null}
          <p>
            Oświadczam, że zapoznałem się i akceptuję
            <a href="/statute"> regulamin</a> oraz
            <a href="/policy-privacy"> Politykę Prywatności</a>
          </p>
        </label>
        <button className={css.formItem_button} type="submit">
          Wyślij
        </button>
      </form>
    </Modal>
  );
};

export default IndividualModal;
