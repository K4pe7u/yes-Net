const { sendEmail, transporter } = require('../config/mailer');

const sendEmailWrapper = async (mailOptions, res) => {
  try {
    await sendEmail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).send('Error sending email');
  }
};
const sendIndividualOrder = async (req, res) => {
  const {
    contactFirstName,
    contactLastName,
    street,
    city,
    postalCode,
    email,
    phone,
    devicesCount,
    installStreet,
    installCity,
    installPostalCode,
  } = req.body;

  if (
    !contactFirstName ||
    !contactLastName ||
    !street ||
    !city ||
    !postalCode ||
    !email ||
    !phone
  ) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'juliusz@yesnet.pl',
    subject: 'Zamówienie Indywidualne yesnet.pl',
    text: `
          Pojawiło się nowe Zamówienie Indywidualne - Skontaktuj się z potencjalnym klientem ;)

          Dane Klienta:
          Imię: ${contactFirstName}
          Nazwisko: ${contactLastName}
          Ulica: ${street}
          Miasto: ${city}
          Kod pocztowy: ${postalCode}
          Email: ${email}
          Telefon: ${phone}
          Ilość Urządzeń Podłączonych do Sieci: ${devicesCount}

          Adres Instalacji:
          Ulica: ${installStreet}
          Miasto: ${installCity}
          Kod pocztowy: ${installPostalCode}
        `,
  };

  await sendEmailWrapper(mailOptions, res);
};

const sendBusinessOrder = async (req, res) => {
  const {
    company,
    contactFirstName,
    contactLastName,
    street,
    city,
    postalCode,
    email,
    phone,
    devicesCount,
    installStreet,
    installCity,
    installPostalCode,
  } = req.body;
  if (
    !contactFirstName ||
    !contactLastName ||
    !street ||
    !city ||
    !postalCode ||
    !email ||
    !phone
  ) {
    return res.status(400).send('All fields are required');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'juliusz@yesnet.pl',
    subject: 'Zamówienie Biznesowe yesnet.pl',
    text: `
      Pojawiło się nowe Zamówienie Biznesowe - Skontaktuj się z potencjalnym klientem.

      Dane Klienta:
      Firma: ${company}
      Imię : ${contactFirstName}
      Nazwisko: ${contactLastName}
      Ulica: ${street}
      Miasto: ${city}
      Kod pocztowy: ${postalCode}
      Email: ${email}
      Telefon: ${phone}
      Ilość Urządzeń Podłączonych do Sieci: ${devicesCount}

      Adres Instalacji:
      Ulica: ${installStreet}
      Miasto: ${installCity}
      Kod pocztowy: ${installPostalCode}
    `,
  };

  await sendEmailWrapper(mailOptions, res);
};

const sendSubmissionForm = async (req, res) => {
  const { name, email, message, primaryOptionId, additionalOptionId } =
    req.body;
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  let primaryOptionText = '';
  let additionalOptionText = '';

  switch (primaryOptionId) {
    case '1.1':
      primaryOptionText = 'Zgłoszenie Serwisowe';
      break;
    case '1.2':
      primaryOptionText = 'Zapytanie';
      break;
    default:
      primaryOptionText = '-';
  }

  switch (additionalOptionId) {
    case '2.1':
      additionalOptionText = 'Całkowity Zanik Łącza';
      break;
    case '2.2':
      additionalOptionText = 'Niestabilna Praca Łącza';
      break;
    case '2.3':
      additionalOptionText = 'Problem z Zasięgiem WiFi';
      break;
    case '2.4':
      additionalOptionText = 'Inne';
      break;
    default:
      additionalOptionText = '-';
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'juliusz@yesnet.pl',
    subject: 'Wiadomość z formularza kontaktowego',
    text: `
      Wiadomość od: ${name} (${email})
      Treść wiadomości: ${message}

      Wybrane opcje:
      Kategoria: ${primaryOptionText}
      Dodatkowa kategoria: ${additionalOptionText}
    `,
  };

  await sendEmailWrapper(mailOptions, res);
};

module.exports = { sendIndividualOrder, sendBusinessOrder, sendSubmissionForm };
