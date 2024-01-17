import React, { useState } from "react";
import Modal from "../Modal";
import css from "./Business.module.css";

const BusinessModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nip: "",
    address: {
      street: "",
      houseNumber: "",
      flatNumber: "",
      city: "",
      postalCode: "",
    },
    email: "",
    phone: "",
    packages: "",
    installationAddress: {
      street: "",
      houseNumber: "",
      flatNumber: "",
      city: "",
      postalCode: "",
    },
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (
      name.startsWith("address.") ||
      name.startsWith("installationAddress.")
    ) {
      const [addressType, field] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [addressType]: {
          ...prevData[addressType],
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className={css.formMainSet}>
        <div className={css.formPartOne}>
          <label className={css.labelMainSet}>
            Imię:
            <input
              className={css.inputMainSet}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className={css.labelMainSet}>
            Nazwisko:
            <input
              className={css.inputMainSet}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className={css.formPartId}>
          NIP:
          <input
            className={css.inputMainSet}
            type="text"
            name="nip"
            value={formData.nip}
            onChange={handleChange}
          />
        </label>
        <label className={css.labelMainSet}>
          Adres:
          <input
            className={css.inputMainSet}
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Ulica"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="address.houseNumber"
            value={formData.address.houseNumber}
            onChange={handleChange}
            placeholder="Nr Domu"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="address.flatNumber"
            value={formData.address.flatNumber}
            onChange={handleChange}
            placeholder="Nr Lokalu"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="Miejscowość"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="address.postalCode"
            value={formData.address.postalCode}
            onChange={handleChange}
            placeholder="Kod Pocztowy"
          />
        </label>
        <label className={css.labelMainSet}>
          Adres instalacji:
          <input
            className={css.inputMainSet}
            type="text"
            name="installationAddress.street"
            value={formData.installationAddress.street}
            onChange={handleChange}
            placeholder="Ulica"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="installationAddress.houseNumber"
            value={formData.installationAddress.houseNumber}
            onChange={handleChange}
            placeholder="Nr Domu"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="installationAddress.flatNumber"
            value={formData.installationAddress.flatNumber}
            onChange={handleChange}
            placeholder="Nr Lokalu"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="installationAddress.city"
            value={formData.installationAddress.city}
            onChange={handleChange}
            placeholder="Miejscowość"
          />
          <input
            className={css.inputMainSet}
            type="text"
            name="installationAddress.postalCode"
            value={formData.installationAddress.postalCode}
            onChange={handleChange}
            placeholder="Kod Pocztowy"
          />
        </label>
        <label className={css.labelMainSet}>
          Email:
          <input
            className={css.inputMainSet}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={css.labelMainSet}>
          Telefon:
          <input
            className={css.inputMainSet}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label className={css.labelMainSet}>
          Pakiety:
          <select
            name="packages"
            value={formData.packages}
            onChange={handleChange}
          >
            <option value="">Wybierz pakiet</option>
            <option value="basic">Podstawowy</option>
            <option value="standard">Standardowy</option>
            <option value="premium">Premium</option>
          </select>
        </label>
        <label className={css.labelMainSet}>
          <input
            className={css.inputMainSet}
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          Wyrażam zgodę na przetwarzanie danych osobowych.
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </Modal>
  );
};

export default BusinessModal;
