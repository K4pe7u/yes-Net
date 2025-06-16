const transporter = require('../config/mailer');

const sendIndividualForm = async (req, res) => {
  try {
    const {
      clientType,
      contactFirstName,
      contactLastName,
      companyName,
      nip,
      street,
      city,
      postalCode,
      installStreet,
      installCity,
      installPostalCode,
      contactMethod,
      email,
      phone,
      bandwidth,
      devicesCount
    } = req.body;

    // Przygotowanie treści maila
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Nowy formularz indywidualny',
      html: `
        <h2>Nowy formularz indywidualny</h2>
        <p><strong>Typ klienta:</strong> ${clientType === 'individual' ? 'Indywidualny' : 'Biznesowy'}</p>
        ${clientType === 'individual' 
          ? `<p><strong>Imię:</strong> ${contactFirstName}</p>
             <p><strong>Nazwisko:</strong> ${contactLastName}</p>`
          : `<p><strong>Nazwa firmy:</strong> ${companyName}</p>
             <p><strong>NIP:</strong> ${nip}</p>`
        }
        <h3>Adres korespondencyjny:</h3>
        <p><strong>Ulica:</strong> ${street}</p>
        <p><strong>Miasto:</strong> ${city}</p>
        <p><strong>Kod pocztowy:</strong> ${postalCode}</p>
        ${installStreet ? `
        <h3>Adres instalacji:</h3>
        <p><strong>Ulica:</strong> ${installStreet}</p>
        <p><strong>Miasto:</strong> ${installCity}</p>
        <p><strong>Kod pocztowy:</strong> ${installPostalCode}</p>
        ` : ''}
        <h3>Dane kontaktowe:</h3>
        <p><strong>Forma kontaktu:</strong> ${contactMethod === 'email' ? 'Email' : 'Telefon'}</p>
        ${contactMethod === 'email' 
          ? `<p><strong>Email:</strong> ${email}</p>`
          : `<p><strong>Telefon:</strong> ${phone}</p>`
        }
        <h3>Szczegóły usługi:</h3>
        <p><strong>Przepustowość:</strong> ${bandwidth}</p>
        <p><strong>Ilość urządzeń:</strong> ${devicesCount}</p>
      `
    };

    // Wysłanie maila
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Formularz został wysłany pomyślnie' });
  } catch (error) {
    console.error('Błąd podczas wysyłania formularza:', error);
    res.status(500).json({ error: 'Wystąpił błąd podczas wysyłania formularza' });
  }
};

module.exports = {
  sendIndividualForm
}; 