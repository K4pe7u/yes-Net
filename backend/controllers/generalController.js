const transporter = require('../config/mailer');

// Mapowanie ID na nazwy opcji
const primaryOptions = {
  '1.1': 'Nowe przyłącze',
  '1.2': 'Uwagi do usługi',
  '1.3': 'Inna sprawa',
  '1.4': 'Zmiana pakietu usług',
  '1.5': 'Obsługa płatności',
  '1.6': 'Obsługa zwrotów',
  '1.7': 'Potrzebuję naprawy'
};
const additionalOptions = {
  '2.1': 'Nowy klient',
  '2.2': 'Obecny klient'
};
const identLabels = {
  'Imię i nazwisko': 'Imię i nazwisko',
  'Nazwa': 'Nazwa',
  'ID z umowy': 'ID z umowy'
};
const contactLabels = {
  'Telefon': 'Telefon',
  'E-mail': 'E-mail'
};

// Wysyłka maila z formularza kontaktowego
const sendContactForm = async (req, res) => {
  const { name, email, primaryOptionId, additionalOptionId, message, identType, contactType } = req.body;

  const primaryOptionName = primaryOptions[primaryOptionId] || primaryOptionId;
  const additionalOptionName = additionalOptions[additionalOptionId] || additionalOptionId;
  const identLabel = identLabels[identType] || identType || 'Dane klienta';
  const contactLabel = contactLabels[contactType] || contactType || 'Kontakt';
  const contactValue = contactType === 'Telefon' ? email : email; // zakładam, że pole 'email' zawiera też telefon jeśli wybrano telefon

  const now = new Date();
  const dateString = now.toLocaleString('pl-PL', { dateStyle: 'short', timeStyle: 'medium' });

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#222;max-width:600px;">
      <h2 style="color:#f8e700;">Nowe zgłoszenie z formularza kontaktowego</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="font-weight:bold;padding:4px 0;color:#1e1e1e;">Kategoria:</td><td>${primaryOptionName}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 0;color:#1e1e1e;">Typ klienta:</td><td>${additionalOptionName}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 0;color:#1e1e1e;width:180px;">${identLabel}:</td><td>${name}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 0;color:#1e1e1e;">${contactLabel}:</td><td>${contactValue}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 0;color:#1e1e1e;vertical-align:top;">Wiadomość:</td><td>${message.replace(/\n/g,'<br>')}</td></tr>
      </table>
      <div style='font-size:11px;color:#888;margin-top:18px;text-align:right;'>Wysłano: ${dateString}</div>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_ADMIN, 
    subject: 'Nowe zgłoszenie z formularza kontaktowego',
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Wysłano!' });
  } catch (error) {
    res.status(500).json({ error: 'Błąd wysyłki maila', details: error.message });
  }
};

module.exports = { sendContactForm };
