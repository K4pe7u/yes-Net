import React, { useState } from "react";
import Modal from "../Modal";
import css from "./Individual.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as Yup from "yup";

const IndividualModal = ({ onClose }) => {
  const [showInstallAddressInput, setShowInstallAddressInput] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const validationSchema = Yup.object({
    pesel: Yup.string().required("Pesel jest wymagany"),
    street: Yup.string().required("Ulica jest wymagana"),
    city: Yup.string().required("Miasto jest wymagane"),
    postalCode: Yup.string().required("Kod pocztowy jest wymagany"),
    contactFirstName: Yup.string().required("Imię jest wymagane"),
    contactLastName: Yup.string().required("Nazwisko jest wymagane"),
    email: Yup.string()
      .email("Nieprawidłowy email")
      .required("Email jest wymagany"),
    phone: Yup.string().required("Telefon jest wymagany"),
    privatePolicy: Yup.boolean().oneOf(
      [true],
      "Musisz zaakceptować regulamin i politykę prywatności"
    ),
  });

  const formik = useFormik({
    initialValues: {
      pesel: "",
      street: "",
      city: "",
      postalCode: "",
      contactFirstName: "",
      contactLastName: "",
      email: "",
      phone: "",
      installStreet: "",
      installCity: "",
      installPostalCode: "",
      privatePolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!captchaToken) {
        alert("Proszę ukończyć weryfikację reCAPTCHA");
        return;
      }
      const config = {
        SecureToken: process.env.REACT_APP_EMAIL_SECURE_TOKEN,
        To: "alt.nm-3o59rh7i@yopmail.com",
        From: "juliusz@yesnet.pl",
        Subject: "Zamówienie Indywidualne yesnet.pl",
        Body: `Pojawiło się nowe Zamówienie Indywidualne - Skontaktuj się z potencjalnym klientem. 
        Dane Klienta: 
        Imię: ${values.contactFirstName}
        Nazwisko: ${values.contactLastName}
        Pesel: ${values.pesel}
        Ulica: ${values.street}
        Miasto: ${values.city}
        Kod pocztowy: ${values.postalCode}
        Email: ${values.email}
        Telefon: ${values.phone}
        Adres Instalacji:
        Ulica: ${values.installStreet}
        Miasto: ${values.installCity}
        Kod pocztowy: ${values.installPostalCode}
        `,
      };
      try {
        await window.Email.send(config);
        alert("Formularz został wysłany pomyślnie!");
      } catch (error) {
        console.error("Error:", error);
        alert("Wystąpił błąd podczas wysyłania formularza.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Modal onClose={onClose}>
      <span className={css.modalTitle}>Podłącz się do świata!</span>
      <form onSubmit={formik.handleSubmit} className={css.formMainSet}>
        <label className={css.formItem}>
          <span>Pesel:</span>
          <input
            type="text"
            name="pesel"
            value={formik.values.pesel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pesel && formik.errors.pesel ? (
            <div>{formik.errors.pesel}</div>
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
            <div>{formik.errors.street}</div>
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
            <div>{formik.errors.city}</div>
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
            <div>{formik.errors.postalCode}</div>
          ) : null}
        </label>
        {formik.values.street !== formik.values.installStreet &&
          !showInstallAddressInput && (
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
          </>
        )}
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
            <div>{formik.errors.contactFirstName}</div>
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
            <div>{formik.errors.contactLastName}</div>
          ) : null}
        </label>
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
            <div>{formik.errors.email}</div>
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
            <div>{formik.errors.phone}</div>
          ) : null}
        </label>
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
            <div>{formik.errors.privatePolicy}</div>
          ) : null}
          <p>
            Oświadczam, że zapoznałem się i akceptuję
            <a href="/statute"> regulamin</a> oraz
            <a href="/policy-privacy"> Politykę Prywatności</a>
          </p>
        </label>
        <button
          className={css.formItem_button}
          type="submit"
          disabled={formik.isSubmitting}
        >
          Wyślij
        </button>
      </form>
    </Modal>
  );
};

export default IndividualModal;
