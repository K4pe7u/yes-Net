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

    const now = new Date();
    const dateString = now.toLocaleString('pl-PL', { dateStyle: 'short', timeStyle: 'medium' });

    const html = `
      <div style="font-family:Arial,sans-serif;font-size:15px;color:#222;max-width:700px;">
        <h2 style="color:#f8e700;">Nowy formularz indywidualny</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="font-weight:bold;padding:4px 0;color:#1e1e1e;width:180px;">Typ klienta:</td><td>${clientType === 'individual' ? 'Indywidualny' : 'Biznesowy'}</td></tr>
          ${clientType === 'individual' 
            ? `<tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Imię:</td><td>${contactFirstName}</td></tr>
               <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Nazwisko:</td><td>${contactLastName}</td></tr>`
            : `<tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Nazwa firmy:</td><td>${companyName}</td></tr>
               <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>NIP:</td><td>${nip}</td></tr>`
          }
          <tr><td colspan="2" style="padding:8px 0 0 0;"><b>Adres korespondencyjny:</b></td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Ulica:</td><td>${street}</td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Miasto:</td><td>${city}</td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Kod pocztowy:</td><td>${postalCode}</td></tr>
          ${installStreet ? `
            <tr><td colspan="2" style="padding:8px 0 0 0;"><b>Adres instalacji:</b></td></tr>
            <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Ulica:</td><td>${installStreet}</td></tr>
            <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Miasto:</td><td>${installCity}</td></tr>
            <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Kod pocztowy:</td><td>${installPostalCode}</td></tr>
          ` : ''}
          <tr><td colspan="2" style="padding:8px 0 0 0;"><b>Dane kontaktowe:</b></td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Forma kontaktu:</td><td>${contactMethod === 'email' ? 'Email' : 'Telefon'}</td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>${contactMethod === 'email' ? 'Email' : 'Telefon'}:</td><td>${contactMethod === 'email' ? email : phone}</td></tr>
          <tr><td colspan="2" style="padding:8px 0 0 0;"><b>Szczegóły usługi:</b></td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Przepustowość:</td><td>${bandwidth}</td></tr>
          <tr><td style='font-weight:bold;padding:4px 0;color:#1e1e1e;'>Ilość urządzeń:</td><td>${devicesCount}</td></tr>
        </table>
        <div style='font-size:11px;color:#888;margin-top:18px;text-align:right;'>Wysłano: ${dateString}</div>
      </div>
    `;

    // Przygotowanie treści maila
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_ADMIN,
      subject: 'Nowy formularz indywidualny',
      html
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