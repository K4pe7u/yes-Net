import React, { useState } from "react";
import Modal from "../Modal";
import css from "./Individual.module.css";
import axios from "axios";

const IndividualModal = ({ onClose }) => {
  const [showInstallAddressInput, setShowInstallAddressInput] = useState(false);
  const [formData, setFormData] = useState({
    pesel: "",
    street: "",
    city: "",
    postalCode: "",
    installStreet: "",
    installCity: "",
    installPostalCode: "",
    contactFirstName: "",
    contactLastName: "",
    email: "",
    phone: "",
    privatePolicy: false, // Dodajemy pole privatePolicy
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Tworzenie deala
      const dealResponse = await axios.post(
        "https://yesnet.bitrix24.pl/rest/1/9vs8d4rnp1puavoz/crm.deal.add",
        {
          fields: {
            TITLE: `${formData.contactFirstName} ${formData.contactLastName}`,
            TYPE_ID: "SALE",
            BEGINDATE: new Date(),
            IS_NEW: "Y",
            UF_CRM_1685603922041: [
              `${formData.street}, ${formData.city}, ${formData.postalCode}`,
            ],
            UF_CRM_1712223928807: formData.pesel,
            UF_CRM_1712224125272: `${formData.contactFirstName} ${formData.contactLastName}`,
            UF_CRM_1712224166026: formData.email,
            UF_CRM_1712224179064: formData.phone,
            UF_CRM_1712227602563: `${formData.installStreet} ${formData.installCity} ${formData.installPostalCode}`,
          },
          params: { REGISTER_SONET_EVENT: "Y" },
        }
      );

      console.log("Deal Response:", dealResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <span className={css.modalTitle}>Podłącz się do świata!</span>
      <form onSubmit={handleSubmit} className={css.formMainSet}>
        <label className={css.formItem}>
          <span>Pesel:</span>
          <input
            type="text"
            name="pesel"
            value={formData.pesel}
            onChange={handleChange}
          />
        </label>
        <label className={css.formItem}>
          <span>Adres:</span>
          <input
            type="text"
            name="street"
            placeholder="Ulica"
            value={formData.street}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Miejscowość"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Kod pocztowy"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </label>
        {formData.street !== formData.installStreet &&
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
                value={formData.installStreet}
                onChange={handleChange}
              />
              <input
                type="text"
                name="installCity"
                placeholder="Miejscowość"
                value={formData.installCity}
                onChange={handleChange}
              />
              <input
                type="text"
                name="installPostalCode"
                placeholder="Kod pocztowy "
                value={formData.installPostalCode}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        <label className={css.formItem}>
          <span>Osoba kontaktowa:</span>
          <input
            type="text"
            name="contactFirstName"
            placeholder="Imię"
            value={formData.contactFirstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactLastName"
            placeholder="Nazwisko"
            value={formData.contactLastName}
            onChange={handleChange}
          />
        </label>
        <label className={css.formItem}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={css.formItem}>
          <span>telefon:</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label className={css.privateCheck}>
          <input
            type="checkbox"
            name="privatePolicy"
            checked={formData.privatePolicy}
            onChange={handleChange}
          />
          <p>
            Oświadczam, że zapoznałem się i akceptuję 
            <a href="/statute"> regulamin</a> oraz
            <a href="/policy-privacy"> Polityką Prywatności</a>
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
